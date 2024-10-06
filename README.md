# Project Overview

Architecture testing with Micro Frontends with Native Federation for Angular

This project is structured around a **shell** application and several micro-applications (app1, app2, app3) that communicate via **module federation**. The goal is to provide both a classic and a lightweight version of the application while ensuring a smooth user experience and modularity.

## Architecture

- **Shell Application:** The main entry point that orchestrates the loading of micro-applications.
- **Micro-Applications:** Each application (app1, app2, app3) is developed as an independent module, which can be dynamically loaded based on user selection.
- **Docker:** Each application runs in its own Docker container to ensure isolation and consistency across environments.

## Launch Modes

- **Classic Mode:** Users can select multiple applications (app1, app2, app3) to load.
- **Autonomous Mode:** Users can launch a specific application without the need for selection.
- **Lite Version:** The user should not have access to non-essential applications in the lite mode.

## Dynamic Component Management

- Components from the applications must be loaded dynamically based on user selection to optimize load times.
- Files like `federation.manifest.json`, `launch.component.ts`, and `app.route.ts` should be adapted to support dynamic loading. The `loadRemoteModule` function is used to load specific components based on the selected applications, allowing for efficient resource management.

## Development Environment

- The application is developed on Windows and must be compatible with this environment, particularly for running Electron.
- Services are to be run in Docker containers, and the `docker-compose.yml` file must be correctly configured to include all services (shell, app1, app2, app3, and electron-app).

## Electron Integration

- An Electron project should be added at the same level as the other applications to provide a desktop version of the application.
- Electron must be configured to display the user interface in a graphical environment. The integration allows users to access the application in a native desktop format, enhancing accessibility.

## Header and Footer

- A **header** and **footer** should be added to the shell to improve navigation and enhance the application's aesthetics.
- The header should contain navigation links to different sections of the application, ensuring users can easily navigate between the main functionalities.

## Error Management

- Errors must be handled appropriately, especially when accessing remote resources (such as `remoteEntry.json`) in the context of using module federation.
- The system should be designed to gracefully handle errors, providing fallback mechanisms or user notifications to ensure a smooth experience.

## Testing and Deployment

- Test the proper functioning of the applications and services via Docker before final deployment.
- Ensure that the applications work as intended in both launch modes. This includes verifying the correct loading of components based on user selections and ensuring no unnecessary applications are included in the lite version.

## Functioning

1. **User Navigation:** The user accesses the shell application, where they can choose between classic and autonomous modes.
2. **Dynamic Loading:** Depending on the selected mode, the shell dynamically loads the relevant micro-applications using the `loadRemoteModule` function.
3. **Communication:** The micro-applications communicate with the shell via shared services and state management to ensure a cohesive user experience.
4. **Error Handling:** The application manages errors through logging and user notifications, ensuring that any issues with loading applications or modules do not disrupt the user experience.
5. **Docker Containers:** Each application runs in a separate Docker container, making it easy to manage dependencies and configurations for each app independently.

## Conclusion

These rules and key elements define the structure and behavior of the project. They will guide you through the development and deployment of the application. If you wish to add further elements or modify certain aspects, feel free to do so!

## Resources

- [Transforming Your Application into Micro-Frontends with Native Federation for Angular](https://medium.com/@erick.98zanetti.98/transforming-your-application-into-micro-frontends-with-native-federation-for-angular-part-1-791d159b09c8#:~:text=Native%20Federation%20is%20an%20advanced%20micro-frontend%20solution%20for%20Angular%20applications)
