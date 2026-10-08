# Imágenes de certificaciones

Las tarjetas se configuran en:

`src/app/components/home/certifications-section/certifications-section.component.ts`

Para actualizar un certificado:

1. Copia la imagen o insignia dentro de esta carpeta.
2. Cambia `imageUrl`, por ejemplo:
   `assets/certifications/azure-fundamentals.webp`.
3. Cambia `credentialUrl` por el enlace público de verificación.
4. Actualiza `title`, `description` y `topics` con los datos reales.

También puedes colocar una URL HTTPS directamente en `imageUrl`, siempre que
el proveedor permita mostrar la imagen desde otro sitio.

## Enlaces de verificación

- Microsoft Learn: abre tu perfil, entra en **Credentials**, selecciona la
  certificación y utiliza el enlace generado por **Share**. El perfil público
  general sigue el formato `https://learn.microsoft.com/users/TU-USUARIO/credentials`.
- AWS: reclama la insignia desde tu cuenta de AWS Certification y copia el
  enlace público generado por Credly. Normalmente sigue el formato
  `https://www.credly.com/badges/TU-ID-DE-INSIGNIA/public_url`.

Los SVG incluidos son marcadores temporales y se pueden reemplazar o eliminar
cuando agregues las imágenes definitivas.
