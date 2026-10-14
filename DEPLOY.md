# Deploy to shared hosting (htdocs)

1. Install Node.js (LTS) from nodejs.org.
2. In this folder, open a terminal and run:
       npm install
       npm run build
3. A `dist` folder appears. Open it and select everything INSIDE it
   (index.html, admin.html, assets/, ...), zip those files.
4. In your host's File Manager open `htdocs`, delete the default index.html,
   upload the zip with "Zip & Extract" while inside `htdocs`
   (or type `htdocs` in "Extract to folder").

Site:  https://yourdomain.com/
Admin: https://yourdomain.com/admin.html   (not linked anywhere on the site)

Supabase setup (once): run supabase/schema.sql then supabase/admin.sql in the
Supabase SQL Editor, turn off Auth > Email > "Confirm email", then create the
admin account at /admin.html.
