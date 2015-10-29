<?php
   // path to theme directory
   $path = "../vendor/altair_v1.2.0/admin/dist/";
   $pathbck = "../vendor/altair_v1.2.0/admin/src/";
?>
<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en" ng-app="magazin"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en" ng-app="magazin"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no"/>

    <link rel="icon" type="image/png" href="<?php echo $path; ?>assets/img/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="<?php echo $path; ?>assets/img/favicon-32x32.png" sizes="32x32">

    <title page-title></title>


    <!-- uikit -->
    <link rel="stylesheet" href="<?php echo $path; ?>bower_components/uikit/css/uikit.almost-flat.min.css" media="all">

    <!-- flag icons -->
    <link rel="stylesheet" href="<?php echo $path; ?>assets/icons/flags/flags.min.css" media="all">

    <!-- altair admin -->
    <link rel="stylesheet" href="<?php echo $path; ?>assets/css/main.min.css" media="all">

    <!-- matchMedia polyfill for testing media queries in JS -->
    <!--[if lte IE 9]>
        <script type="text/javascript" src="<?php echo $path; ?>bower_components/matchMedia/matchMedia.js"></script>
        <script type="text/javascript" src="<?php echo $path; ?>bower_components/matchMedia/matchMedia.addListener.js"></script>
    <![endif]-->

</head>
<body>
<div class="wrapper">

<!--<body class="sidebar_main_open sidebar_main_swipe">
-->
<!-- Main Angular scripts -->
<script src="../vendor/angular_v1.4.4/angular.min.js"></script>
<script src="../vendor/ui-router/angular-ui-router.js"></script>
<script src="app/app.js"></script>

    <!-- Angular Dateien zusammenfassen und einbinden -->
<script type="text/javascript" src="virtual_javascript.php"></script>

    <!-- main header -->
    <header id="header_main">
        <?php require_once('app/layout/header.html');?>
    </header><!-- main header end -->

<!--    <!-- main sidebar -->
    <aside id="sidebar_main">
        <?php /*echo "sidebar_main.html"; */?>
    </aside><!-- main sidebar end -->

    <div id="page_content">
        <div id="page_content_inner" ui-view>

            <?php require_once('app/layout/content.html');?>
            <a href="<?php echo $pathbck; ?>login.php">Login_________</a>
            <a href="user/login">Sign</a>
        </div>
    </div>

</div>

    <!-- google web fonts -->
    <script>
        WebFontConfig = {
            google: {
                families: [
                    'Source+Code+Pro:400,700:latin',
                    'Roboto:400,300,500,700,400italic:latin'
                ]
            }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

    <!-- common functions -->
    <script src="<?php echo $path; ?>assets/js/common.min.js"></script>
    <!-- uikit functions -->
    <script src="<?php echo $path; ?>assets/js/uikit_custom.min.js"></script>
    <!-- altair common functions/helpers -->
    <script src="<?php echo $path; ?>assets/js/altair_admin_common.min.js"></script>



    <script>
        $(function() {
            // enable hires images
            altair_helpers.retina_images();
            // fastClick (touch devices)
            if(Modernizr.touch) {
                FastClick.attach(document.body);
            }
        });
    </script>

</body>
</html>