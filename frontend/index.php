<?php
   // path to theme directory
/*   $path = "../vendor/altair_v1.2.0/admin/dist/";*/
$path = "../vendor/altair_v2.0.0/admin/angular/";

$path2 = "../vendor/altair_v2.0.0/admin/html/src/";

?>
<!doctype html>
<!--[if lte IE 9]> <html class="lte-ie9" lang="en" ng-app="magazin.frontend" document-events ng-click="onClick($event)" ng-keyup="onKeyUp($event)" ng-class="{ 'page_loading': pageLoading, 'page_loaded': pageLoaded }"><![endif]-->
<!--[if gt IE 9]><!--> <html lang="en" ng-app="magazin.frontend" document-events ng-click="onClick($event)" ng-keyup="onKeyUp($event)" ng-class="{ 'page_loading': pageLoading, 'page_loaded': pageLoaded }"><!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Remove Tap Highlight on Windows Phone IE -->
    <meta name="msapplication-tap-highlight" content="no"/>

    <link rel="icon" type="image/png" href="<?php echo $path; ?>assets/img/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="<?php echo $path; ?>assets/img/favicon-32x32.png" sizes="32x32">

    <title page-title></title>
   <!-- <title page-title ng-bind="page_title"></title>-->

    <!-- uikit -->
    <link rel="stylesheet" href="<?php echo $path; ?>bower_components/uikit/css/uikit.almost-flat.min.css" media="all">

    <!-- flag icons -->
    <link rel="stylesheet" href="<?php echo $path; ?>assets/icons/flags/flags.min.css" media="all">
<!--    <script src="<?php /*echo $path; */?>bower_components/jquery-bez/jquery.bez.min.js"></script>
-->

    <!-- altair admin -->
    <link rel="stylesheet" href="<?php echo $path; ?>assets/css/main.min.css" media="all">

    <!-- matchMedia polyfill for testing media queries in JS -->
    <!--[if lte IE 9]>
        <script type="text/javascript" src="<?php echo $path; ?>bower_components/matchMedia/matchMedia.js"></script>
        <script type="text/javascript" src="<?php echo $path; ?>bower_components/matchMedia/matchMedia.addListener.js"></script>

    <![endif]-->

</head>
<body class="{{main_theme}}" data-uk-observe ng-class="{
    'header_main_content': primarySidebarActive && !$state.is('home'),
    'sidebar_main_active': primarySidebarActive && !miniSidebarActive  && ( !$state.is('home') && !$state.is('login') && !$state.includes('error')),
    'sidebar_main_open': primarySidebarOpen && !miniSidebarActive && largeScreen &&  ( !$state.is('home') && !$state.is('login')&& !$state.includes('error')),
    'sidebar_mini': miniSidebarActive && largeScreen &&  (!$state.is('home')&& !$state.is('login') && !$state.includes('error')),
    'sidebar_main_hiding': primarySidebarHiding,
    'sidebar_secondary_active': secondarySidebarActive &&  ( !$state.is('home') && !$state.is('login') && !$state.includes('error')),
    'top_bar_active': toBarActive && ( !$state.is('home') && !$state.is('login') && !$state.includes('error')),
    'header_double_height': headerDoubleHeightActive && ( !$state.is('home') && !$state.is('login') && !$state.includes('error')),
    'main_search_active': mainSearchActive && ( !$state.is('home') && !$state.is('login') && !$state.includes('error')),
    'login_page': $state.is('login'),
    'error_page': $state.includes('error'),
    'uk-height-1-1': page_full_height}"
      content-sidebar>
<div class="wrapper">

<!-- Main Angular scripts -->
    <script src="../vendor/angular_v1.4.4/angular.js"></script>

    <script src="../vendor/ui-router/angular-ui-router.js"></script>
    <!-- common functions -->
    <script src="<?php echo $path; ?>assets/js/common.min.js"></script>
    <!-- uikit functions -->
    <script src="<?php echo $path; ?>assets/js/uikit_custom.min.js"></script>
    <!-- altair common functions/helpers -->
    <script src="<?php echo $path2; ?>assets/js/altair_admin_common.js"></script>
    <script src="<?php echo $path; ?>bower_components/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="<?php echo $path; ?>bower_components/angular-animate/angular-animate.min.js"></script>
    <!-- ui-router -->
    <script src="<?php echo $path; ?>bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <!-- ocLazyLoad -->
    <script src="<?php echo $path; ?>bower_components/oclazyload/dist/ocLazyLoad.min.js"></script>
    <!-- retina images -->
    <script src="<?php echo $path; ?>app/modules/angular-retina.js"></script>
<!--    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>-->
        <!-- Angular Dateien zusammenfassen und einbinden -->
    <script type="text/javascript" src="virtual_javascript.php"></script>

    <!-- main header -->
    <header id="header_main">
        <?php require_once('app/layout/header.html');?>
    </header>
    <!-- main header end -->

    <!-- main sidebar -->
    <aside id="sidebar_main">
        <?php  echo "sidebar_main.html"; ?>
    </aside>
    <!-- main sidebar end -->

    <div id="page_content">
        <div id="page_content_inner" ui-view></div>
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