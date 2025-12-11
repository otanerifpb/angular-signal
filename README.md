# Angular Signal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Pontos importantes do `signal` no Angular seja em um `component`ou `service`.
* __Material de apoio Prof. Dantas IFPB:__ [Aula Prof. Dantas](https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/7_angular_fundamentals/README.md)
* __Site oficial:__ [Angular](http://angular.dev)
* Usar o `signal` sempre que um valor armazenado é dinámico, se estático usar um `component`
* Para acessar um signal usar `nome-signal()`
* Para modificar o valor de um signal usar `nome-signal().set() ou nome-signal().update()`
* Usar `computed()` também indica que é um `signal`
* Usar um `signal` seja no `component` ou `service`, Sempre que o atributo for dinámico
