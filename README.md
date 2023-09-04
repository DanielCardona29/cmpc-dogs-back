# Guía para Ejecutar una Aplicación NestJS

Esta guía te ayudará a configurar y ejecutar una aplicación NestJS. Asegúrate de configurar `dbconfig` siguiendo las directrices de tu servidor de Postman antes de seguir estos pasos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

1. [Node.js](https://nodejs.org/): Asegúrate de tener Node.js instalado en tu sistema. Puedes verificar la instalación ejecutando `node -v` en la línea de comandos.

2. [Postman](https://www.postman.com/): Asegúrate de tener Postman instalado para configurar y probar tu servidor.

## Pasos para Ejecutar la Aplicación NestJS

Sigue estos pasos para ejecutar la aplicación NestJS:

1. **Clona el Repositorio:** Clona el repositorio de la aplicación desde GitHub utilizando el siguiente comando:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

   Reemplaza `tu-usuario` y `tu-repositorio` con la URL de tu repositorio.

2. **Accede al Directorio de la Aplicación:** Navega al directorio de la aplicación clonada utilizando el comando `cd`:

    ```bash
    cd tu-repositorio
    ```

3. **Instala las Dependencias:** Instala las dependencias del proyecto utilizando npm (Node Package Manager). Ejecuta el siguiente comando:

    ```bash
    npm install
    ```

4. **Configura `dbconfig`:** Abre el archivo de configuración `dbconfig` y sigue las directrices de tu servidor de Postman para configurar la conexión a la base de datos. Por ejemplo:

    ```javascript
    // src/config/dbconfig.js

    module.exports = {
      host: 'tu-host',
      port: 'tu-puerto',
      username: 'tu-usuario',
      password: 'tu-contraseña',
      database: 'tu-base-de-datos',
    };
    ```

5. **Inicia la Aplicación:** Una vez que hayas configurado `dbconfig`, puedes iniciar la aplicación con el siguiente comando:

    ```bash
    npm run start
    ```

   Esto iniciará tu servidor NestJS.

6. **Verifica el Servidor:** Abre Postman y realiza las pruebas necesarias para verificar que tu servidor está funcionando correctamente y que se conecta a la base de datos según la configuración de `dbconfig`.

## Detener la Aplicación

Para detener la aplicación NestJS, regresa a la línea de comandos donde ejecutaste `npm run start` y presiona `Ctrl + C`. Confirmarás que deseas detener la aplicación y el servidor se cerrará.

¡Listo! Ahora deberías poder ejecutar tu aplicación NestJS con la configuración de `dbconfig` siguiendo las directrices de tu servidor de Postman.
