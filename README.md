# cypressCRDigital
Repositorio con las pruebas automatizadas en Cypress de CRDigital

## Requisitos Previos

- Node.js (versión recomendada: 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd cypressCRDigital
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecución de Pruebas

### Pruebas E2E (End-to-End)

Las pruebas E2E simulan la interacción real del usuario con la aplicación. Se ejecutan contra la URL base configurada en `cypress.config.js`.

Para ejecutar las pruebas E2E de dos formas:

1. **Modo Interactivo (Recomendado para desarrollo)**:
```bash
npm run cypress:open
```
Esto abrirá la interfaz gráfica de Cypress donde podrás:
- Ver todas las pruebas disponibles
- Seleccionar el navegador (Chrome, Firefox, Electron)
- Ejecutar pruebas individuales o en grupo
- Ver los resultados en tiempo real

2. **Modo Headless (Recomendado para CI/CD)**:
```bash
npm run cypress:run
```
Este comando ejecutará todas las pruebas en modo headless (sin interfaz gráfica).

### Pruebas de Componentes

Las pruebas de componentes verifican el funcionamiento individual de los componentes de React.

Para ejecutar las pruebas de componentes:

1. **Modo Interactivo**:
```bash
npm run cypress:open
```
Luego selecciona "Component Testing" en la interfaz de Cypress.

2. **Modo Headless**:
```bash
npm run cypress:run --component
```

## Estructura del Proyecto

```
cypress/
├── e2e/           # Pruebas end-to-end
├── components/    # Pruebas de componentes
├── fixtures/      # Datos de prueba
└── support/       # Comandos personalizados y configuración
```

## Credenciales de Prueba

Las credenciales de prueba se encuentran en los archivos de fixtures:
- `cypress/fixtures/user.json` - Usuario válido
- `cypress/fixtures/fakeUser.json` - Usuario inválido
- `cypress/fixtures/incorrectPassword.json` - Usuario con contraseña incorrecta

## Notas Importantes

- Las pruebas E2E se ejecutan contra la URL base configurada en `cypress.config.js`
- Las pruebas de componentes utilizan Vite como bundler
- Se recomienda ejecutar las pruebas en modo interactivo durante el desarrollo para mejor visibilidad
- Los videos y capturas de pantalla de las pruebas fallidas se guardan en `cypress/videos/` y `cypress/screenshots/` respectivamente

## Troubleshooting

Si encuentras problemas al ejecutar las pruebas:

1. Asegúrate de que todas las dependencias estén instaladas correctamente
2. Verifica que la URL base en `cypress.config.js` sea accesible
3. Limpia la caché de npm si es necesario:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```
