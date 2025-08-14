# Guía de Deployment

## Crear Repositorio en GitHub

### Opción 1: Usando GitHub CLI (Recomendado)
1. Instala GitHub CLI si no lo tienes: https://cli.github.com/
2. Autentícate: `gh auth login`
3. Crea el repositorio:
```bash
gh repo create gaps-shopping-list --public --description "Aplicación web para generar listas de compras personalizadas según las fases de la dieta GAPS"
```

### Opción 2: Manualmente en GitHub.com
1. Ve a https://github.com/new
2. Nombre del repositorio: `gaps-shopping-list`
3. Descripción: "Aplicación web para generar listas de compras personalizadas según las fases de la dieta GAPS"
4. Selecciona "Public"
5. NO inicialices con README (ya tenemos uno)
6. Crea el repositorio

## Subir el código

Una vez creado el repositorio, ejecuta estos comandos:

```bash
# Agregar el repositorio remoto (reemplaza YOUR_USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/YOUR_USERNAME/gaps-shopping-list.git

# Subir el código
git branch -M main
git push -u origin main
```

## Deploy en Vercel

1. Ve a https://vercel.com
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `gaps-shopping-list`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Si usas Supabase, agrega las variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Haz clic en "Deploy"

## Configurar Supabase (Opcional)

1. Crea un proyecto en https://supabase.com
2. Ve a Settings > API para obtener:
   - Project URL
   - Anon key
3. Ejecuta las consultas SQL del README.md en el SQL Editor
4. Agrega las variables de entorno en Vercel

## URL del proyecto
Una vez desplegado, tu app estará disponible en:
`https://gaps-shopping-list-your-username.vercel.app`