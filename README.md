# 📱 Aplicación de Cupones con React Native y Expo

Esta es una aplicación móvil de **cupones de descuento** como parte de la prueba técnica para el puesto de fullstack en `goatpass.ai` desarrollada con **React Native y Expo**, que permite a los usuarios **ver cupones, agregarlos a favoritos y gestionar su autenticación**.

## 🛠 Tecnologías Utilizadas

- **React Native + Expo** → Para un desarrollo rápido y fácil de mantener.
- **Expo Router** → Para una navegación sencilla basada en archivos.
- **Zustand** → Para el manejo eficiente del estado global.
- **Tailwind CSS (NativeWind)** → Para estilos rápidos y flexibles.
- **Axios** → Para las peticiones HTTP al backend.
- **TypeScript** → Para mayor seguridad y escalabilidad en el código.

---

## 🚀 Instalación y Configuración

Sigue estos pasos para instalar y ejecutar la aplicación en tu dispositivo o emulador.

### **1️⃣ Clonar el Repositorio**

```sh
git clone https://github.com/DavidFarelas/goatpass-app.git
cd goatpass-app
```

### **2️⃣ Instalar Dependencias**

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```sh
npm install
```

### **3️⃣ Configurar Variables de Entorno**

Modifica el archivo **`Env.ts`** en la constants y agrega la URL de la API:

```env
API_URL="htt://localhost:9091/api";
```

### **4️⃣ Ejecutar la Aplicación**

Para iniciar la app en un emulador o dispositivo físico, usa:

```sh
npx expo start
```

Para probar en el navegador:

```sh
npx expo start --web
```

---

## 📌 Funcionalidades Implementadas

✅ **Autenticación** → Ingreso con correo electrónico.  
✅ **Lista de Cupones** → Se obtienen desde el backend.  
✅ ✅ **Favoritos** → Los usuarios pueden marcar y desmarcar cupones como favoritos.  
✅ **Persistencia de Estado** → Se guarda la sesión del usuario y sus favoritos.  
✅ **Diseño Responsivo** → Funciona en dispositivos móviles y en web.

---

## 📍 Justificación de Decisiones Técnicas

### **📌 Expo & React Native**

- **Expo** fue elegido para facilitar la configuración, pruebas y compatibilidad con múltiples dispositivos sin necesidad de configuración manual de `Xcode` o `Android Studio`.
- **React Native** permite un desarrollo rápido y una experiencia fluida en dispositivos móviles.

### **📌 Expo Router (Navegación)**

- Se utilizó **Expo Router** en lugar de `react-navigation` porque ofrece **una navegación basada en archivos** más clara y escalable.
- **Ventaja:** Permite organizar pantallas dentro de carpetas como `app/(tabs)/index.tsx`, haciendo que el código sea más mantenible.

### **📌 Zustand (Estado Global)**

- Se eligió **Zustand** en lugar de **Redux** porque es **más ligero, simple y rápido** para gestionar el estado de autenticación y favoritos.
- No requiere **boilerplate innecesario** como reducers y actions.

### **📌 Tailwind CSS (NativeWind)**

- Se utilizó **NativeWind** porque permite escribir estilos **de manera declarativa** con clases CSS dentro de los componentes de React Native.
- Facilita la personalización rápida sin necesidad de crear múltiples estilos en `StyleSheet.create()`.

### **📌 Conexión con Backend**

- Se usa **Axios** para manejar peticiones HTTP, ya que ofrece mejor manejo de errores y mayor flexibilidad que `fetch()`.
- Se implementa **manejo de favoritos con un backend**, asegurando que los datos sean persistentes entre sesiones.
