# Lista de Compras GAPS

Una aplicación web especializada para generar listas de compras personalizadas según las fases de la dieta GAPS (Gut and Psychology Syndrome).

## Características

- ✅ **6 Fases GAPS**: Listas específicas para cada fase de la dieta
- 🛒 **Lista Interactiva**: Marca artículos como comprados
- 📝 **Personalización**: Agrega artículos personalizados
- 📱 **Responsive**: Funciona en móviles y tablets
- 🖨️ **Exportable**: Imprime o descarga listas para apps de compras
- 📊 **Categorización**: Alimentos organizados por categorías
- ⚠️ **Restricciones**: Información sobre alimentos no permitidos
- 💡 **Sustituciones**: Alternativas para alimentos específicos

## Fases GAPS Incluidas

1. **Fase 1**: Caldos caseros y probióticos
2. **Fase 2**: Yemas de huevo y ghee
3. **Fase 3**: Vegetales cocidos y aguacate
4. **Fase 4**: Carnes asadas y aceite de oliva
5. **Fase 5**: Vegetales crudos y frutas cocidas
6. **Fase 6**: Frutas crudas y mayor variedad

## Tecnologías

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Base de datos**: Supabase (opcional)
- **Deployment**: Vercel
- **Icons**: Lucide React

## Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd gaps-shopping-list
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (opcional para Supabase):
```bash
cp .env.local.example .env.local
# Edita .env.local con tus credenciales de Supabase
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración de Supabase (Opcional)

Si quieres persistir las listas de compras, configura Supabase:

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ejecuta las siguientes consultas SQL en el editor de Supabase:

```sql
-- Tabla para listas de compras
CREATE TABLE shopping_lists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  phase INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla para artículos de la lista
CREATE TABLE shopping_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  list_id UUID REFERENCES shopping_lists(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  quantity TEXT NOT NULL,
  checked BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Políticas RLS (Row Level Security)
ALTER TABLE shopping_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_items ENABLE ROW LEVEL SECURITY;

-- Políticas para shopping_lists
CREATE POLICY "Users can view own lists" ON shopping_lists
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own lists" ON shopping_lists
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own lists" ON shopping_lists
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own lists" ON shopping_lists
  FOR DELETE USING (auth.uid() = user_id);

-- Políticas para shopping_items
CREATE POLICY "Users can view own items" ON shopping_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM shopping_lists 
      WHERE shopping_lists.id = shopping_items.list_id 
      AND shopping_lists.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own items" ON shopping_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM shopping_lists 
      WHERE shopping_lists.id = shopping_items.list_id 
      AND shopping_lists.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own items" ON shopping_items
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM shopping_lists 
      WHERE shopping_lists.id = shopping_items.list_id 
      AND shopping_lists.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own items" ON shopping_items
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM shopping_lists 
      WHERE shopping_lists.id = shopping_items.list_id 
      AND shopping_lists.user_id = auth.uid()
    )
  );
```

3. Copia la URL del proyecto y la clave anónima a tu archivo `.env.local`

## Deployment en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel (si usas Supabase)
3. Despliega automáticamente

## Uso

1. **Selecciona una fase**: Elige la fase GAPS apropiada
2. **Revisa la lista**: Ve los alimentos recomendados organizados por categorías
3. **Personaliza**: Agrega artículos adicionales si es necesario
4. **Marca como comprado**: Usa los checkboxes para marcar artículos
5. **Exporta**: Imprime o descarga la lista para usar en el supermercado

## Categorías de Alimentos

- Carnes
- Vegetales
- Frutas
- Fermentados
- Grasas
- Frutos secos
- Semillas
- Condimentos
- Endulzantes
- Suplementos
- Bebidas
- Preparados

## Advertencia Médica

⚠️ **IMPORTANTE**: Esta aplicación es solo informativa. La dieta GAPS debe ser supervisada por un médico o nutricionista especializado. Consulta siempre con un profesional de la salud antes de comenzar cualquier dieta restrictiva.

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Recursos Adicionales

- [Dieta GAPS Oficial](https://www.gaps.me/)
- [Libro "Gut and Psychology Syndrome" por Dr. Natasha Campbell-McBride](https://www.gaps.me/gaps-book/)
- [Comunidad GAPS en español](https://www.facebook.com/groups/GAPSenEspanol/)