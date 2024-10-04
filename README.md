# Mi Proyecto Javascript - Programación Web Avanzada (MAD-UCV)

## Instalando GIT en nuestro sistema

Para empezar a trabajar con el proyecto, lo primero que debemos hacer es asegurarnos de tener instalado GIT en nuestro sistema.

**Windows**

https://git-scm.com/downloads/win (64-bit Standalone Installer). El asistente os hará mil preguntas, sí a todo.

**iOS**

El primer paso es instalar Homebrew (https://brew.sh/) si no lo tenéis instalado ya.  Abrid una terminal y ejecutad el siguiente comando:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Os pedirá contraseña de usuario del ordenador (aunque parece que no se escriba nada cuando tecleáis, sí se está escribiendo, ponedla y dadle a enter).

Una vez haya concluido, al final del propio log de la instalación os dice que copiéis y ejecutéis tres comandos que aparecen ahí mismo para añadir Homebrew al PATH de vuestro sistema. Hacedlo.

Hecho esto, procedemos a instalar GIT con el siguiente comando: 

brew install git

Y listo, podemos seguir.

**Linux**

En muchas distribuciones GIT viene preinstalado, si no, en la terminal, a través de vuestro gestor de paquetes (apt, rpm, dnf, yum...) podéis instalarlo desde los repositorios oficiales. Por ejemplo para distros basadas en Debian:

sudo apt install git

## Configurando GIT

En muchos casos, la primera vez que usamos GIT en el sistema, hemos de configurar nuestro nombre de usuario y nuestro email. Para ello, ejecutamos los siguientes comandos en la terminal sustituyendo los valores finales por los que corresponda en vuestro caso. *(Para usuarios de Windows, la terminal por defecto en vuestro sistema es PowerShell, debéis cambiar a Git Bash para ejecutar estos comandos)

git config --global user.name el_nombre_de_usuario_que_quieras
git config --global user.email tu_email_en_github

Para ver si lo hemos configurado correctamente podemos ejecutar el siguiente comando:

git config -l
