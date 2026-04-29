import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "jv-p5",
  language: "java",
  title: "Projeto Master Java: Dynamic Proxies e Segurança",
  description: "Intercete chamadas de transações para validação de segurança.",
  statement: "Utilize java.lang.reflect.Proxy para criar uma instância que intercete os métodos do processador.",
  isProjectPart: true,
  template: `import java.lang.reflect.*;

public class SecurityProxy {
    public static Object createProxy(Object target) {
        return Proxy.newProxyInstance(
            target.getClass().getClassLoader(),
            target.getClass().getInterfaces(),
            (proxy, method, args) -> {
                System.out.println("Validando credenciais...");
                return method.invoke(target, args);
            }
        );
    }
}`,
  detailedExplanation: `
    <h3>🎭 Metaprogramação Corporativa</h3>
    <p>Proxies dinâmicos são a base de frameworks como Spring AOP. Eles permitem injetar segurança, transações e logs de forma transparente em qualquer componente do seu banco.</p>
  `,
  objectives: [
    {
      id: "new_proxy",
      description: "Utilize o método Proxy.newProxyInstance().",
      test: "Proxy.newProxyInstance"
    },
    {
      id: "invoke",
      description: "Implemente o InvocationHandler e chame method.invoke().",
      test: "method.invoke"
    }
  ]
};