# Mi Proyecto Javascript - Programación Web Avanzada (MAD-UCV)

## Instalando GIT en nuestro sistema

Para empezar a trabajar con el proyecto, lo primero que debemos hacer es asegurarnos de tener instalado GIT en nuestro sistema.

**Windows**

https://git-scm.com/downloads/win (64-bit Standalone Installer). El asistente os hará mil preguntas, sí a todo.

**iOS**

El primer paso es instalar Homebrew (https://brew.sh/) si no lo tenéis instalado ya.  Abrid una terminal y ejecutad el siguiente comando:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Os pedirá contraseña de usuario del ordenador (aunque parece que no se escriba nada, sí se está escribiendo, ponedla y dadle a enter).

Una vez haya concluido, al final del propio log de la instalación os dice que copiéis y ejecutéis tres comandos que aparecen ahí mismo para añadir Hombrew al PATH de vuestro sistema. Hacedlo.

Hecho esto, procedemos a instalar GIT con el siguiente comando: 

brew install git

Y listo, podemos seguir.

**Linux**

En muchas distribuciones GIT viene preinstalado, si no, en la terminal, a través de vuestro gestor de paquetes (apt, rpm, dnf, yum...) podéis instalarlo desde los repositorios oficiales. Por ejemplo para distros basadas en Debian:

sudo apt install git







Para configurar tu nombre de usuario y tu correo en git, ejecuta los siguientes comandos en la terminal sustituyendo los valores <> por los que corresponda (¡¡¡Quita también los <> !!!)

git config --global user.name <Tu nombre de usuario (el que quieras)>
git config --global user.email <El mail con en el que estés registrado en GitHub>
