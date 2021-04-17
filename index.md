<!DOCTYPE html>
<html>
    <head>
        <title>St. Art - Homepage</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta name="description" content="St. Art, a strange and messy street on the internet!">
        <link rel="icon" href="favicon.ico">
        <link href="style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
      <!--<script src="script.js"></script> -->
        <div id="container">
            <div id="header">
                <div id="logo">
                    <a href="index.html" target="_self">
                        <img src="logo.png" alt="St.Art">
                    </a>
                </div>
                <div id="summary">
                    <ul>
                        <li>Has Jam On</li>
                        <li>Hobbyist</li>
                        <li>Doesn't drink coffee.</li>
                    </ul>
                </div>
            </div>
            <div id="article">
                <h1>You are on St. Art!</h1>
                <p>Welcome to St. Art, this is a strange place full of secrets! It's a project by <a href="https://hasjamon.itch.io/">HasJamOn</a> (<a href="https://ko-fi.com/hasjamon">ko-fi</a>)</p>
                <p>This street will contain various coding projects as I go through lessons and try to make art, design and video games.</p>
            </div>
            <div id="footer">
                <p>St. Art © 2021 by <a href="https://hasjamon.itch.io/">HasJamOn</a>(<a href="https://ko-fi.com/hasjamon">ko-fi</a>)</p>
            </div>
        </div>
        <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
        <script>
        kofiWidgetOverlay.draw('hasjamon', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Feed me jam',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff',
          'floating-chat.donatebutton.image': 'logo.png'
        });
        </script>
    </body>
</html>