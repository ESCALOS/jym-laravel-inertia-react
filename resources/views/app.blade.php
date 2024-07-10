<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <meta name="title" content="Servicos Ambientales J&M S.A.C.- Consultoría Ambiental y Seguridad Ocupacional" />
    <meta name="description"
        content="Brindamos servicios de consultoría ambiental y asesoría en seguridad y salud ocupacional a nivel nacional." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.seramjym.com" />
    <meta property="og:image" content="https://www.seramjym.com/android-chrome-512x512.png">
    <meta property="og:title"
        content="Servicos Ambientales J&M S.A.C. - Consultoría Ambiental y Seguridad Ocupacional" />
    <meta property="og:description"
        content="Brindamos servicios de consultoría ambiental y asesoría en seguridad y salud ocupacional a nivel nacional." />
    <meta property="og:site_name" content="Servicos Ambientales J&M S.A.C.">

    <!-- Link to the web manifest -->
    <link rel="manifest" href="/site.webmanifest">

    <!-- Android Icons -->
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Favicon Icons -->
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" href="/favicon.ico">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
