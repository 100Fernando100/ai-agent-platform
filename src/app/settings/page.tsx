export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">⚙️ Settings</h1>
      <p>
        Bienvenido a tu página de configuración. Acá podrás controlar ajustes
        personales y conectar con Airtable.
      </p>
      <ul>
        <li>🌍 Idioma por defecto: <strong>en</strong></li>
        <li>📅 Calendly link: <em>pendiente</em></li>
        <li>🗣️ Estilo del asistente: <em>amigable</em></li>
      </ul>
    </div>
  );
}
