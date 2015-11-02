
angular
    .module('magazin.frontend')
    .config([
        '$ocLazyLoadProvider', 'variables',
        function($ocLazyLoadProvider,variables) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: [
                    // ----------- FORM ELEMENTS -----------
                    {
                        name: 'lazy_autosize',
                        files: [
                            variables.path+'bower_components/autosize/dist/autosize.js',
                            variables.path+'app/modules/angular-autosize.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_iCheck',
                        files: [
                            variables.path+"bower_components/jquery-icheck/icheck.js",
                            variables.path+'app/modules/angular-icheck.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_selectizeJS',
                        files: [
                            variables.path+'bower_components/selectize/dist/js/standalone/selectize.min.js',
                            variables.path+'app/modules/angular-selectize.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_switchery',
                        files: [
                            variables.path+'bower_components/switchery/dist/switchery.js',
                            variables.path+'app/modules/angular-switchery.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_ionRangeSlider',
                        files: [
                            variables.path+ 'bower_components/ion.rangeslider/js/ion.rangeSlider.min.js',
                            variables.path+'app/modules/angular-ionRangeSlider.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_masked_inputs',
                        files: [
                            variables.path+'bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js'
                        ]
                    },
                    {
                        name: 'lazy_character_counter',
                        files: [
                            variables.path+'app/modules/angular-character-counter.js'
                        ]
                    },
                    {
                        name: 'lazy_parsleyjs',
                        files: [
                            variables.path+'assets/js/custom/parsleyjs_config.js',
                            variables.path+'bower_components/parsleyjs/dist/parsley.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_wizard',
                        files: [
                            variables.path+'assets/js/custom/parsleyjs_config.js',
                            variables.path+'bower_components/parsleyjs/dist/parsley.min.js',
                            variables.path+'bower_components/lodash/lodash.min.js',
                            variables.path+'bower_components/angular-wizard/dist/angular-wizard.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_wysiwyg',
                        files: [
                            variables.path+'bower_components/ckeditor/ckeditor.js',
                            variables.path+'app/modules/angular-ckeditor.js'
                        ],
                        serie: true
                    },

                    // ----------- CHARTS -----------
                    {
                        name: 'lazy_charts_chartist',
                        files: [
                            variables.path+'bower_components/chartist/dist/chartist.min.css',
                            variables.path+'bower_components/chartist/dist/chartist.min.js',
                            variables.path+'app/modules/angular-chartist.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_easypiechart',
                        files: [
                            variables.path+'bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js'
                        ]
                    },
                    {
                        name: 'lazy_charts_metricsgraphics',
                        files: [
                            variables.path+'bower_components/metrics-graphics/dist/metricsgraphics.css',
                            variables.path+'bower_components/d3/d3.min.js',
                            variables.path+'bower_components/metrics-graphics/dist/metricsgraphics.min.js',
                            variables.path+'app/modules/angular-metrics-graphics.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_c3',
                        files: [
                            variables.path+'bower_components/c3js-chart/c3.min.css',
                            variables.path+'bower_components/d3/d3.min.js',
                            variables.path+'bower_components/c3js-chart/c3.min.js',
                            variables.path+'bower_components/c3-angular/c3-angular.min.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_charts_peity',
                        files: [
                            variables.path+'bower_components/peity/jquery.peity.min.js',
                            variables.path+'app/modules/angular-peity.js'
                        ],
                        serie: true
                    },

                    // ----------- COMPONENTS -----------
                    {
                        name: 'lazy_countUp',
                        files: [
                            variables.path+'bower_components/countUp.js/countUp.min.js',
                            variables.path+'app/modules/angular-countUp.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_clndr',
                        files: [
                            variables.path+'bower_components/clndr/clndr.min.js',
                            variables.path+'bower_components/angular-clndr/angular-clndr.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_google_maps',
                        files: [
                            variables.path+'bower_components/ngmap/build/scripts/ng-map.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_weathericons',
                        files: [
                            variables.path+'bower_components/weather-icons/css/weather-icons.css'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_prismJS',
                        files: [
                            variables.path+"bower_components/prism/prism.js",
                            variables.path+"bower_components/prism/components/prism-php.js",
                            variables.path+"bower_components/prism/plugins/line-numbers/prism-line-numbers.js",
                            variables.path+'app/modules/angular-prism.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_dragula',
                        files: [
                            variables.path+ 'bower_components/angular-dragula/dist/angular-dragula.min.js'
                        ]
                    },
                    {
                        name: 'lazy_pagination',
                        files: [
                            variables.path+ 'bower_components/angularUtils-pagination/dirPagination.js'
                        ]
                    },

                    // ----------- PLUGINS -----------
                    {
                        name: 'lazy_fullcalendar',
                        files: [
                            variables.path+'bower_components/fullcalendar/dist/fullcalendar.min.css',
                            variables.path+'bower_components/fullcalendar/dist/fullcalendar.min.js',
                            variables.path+ 'bower_components/fullcalendar/dist/gcal.js',
                            variables.path+'bower_components/angular-ui-calendar/src/calendar.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_codemirror',
                        files: [
                            variables.path+"bower_components/codemirror/lib/codemirror.css",
                            variables.path+"assets/css/codemirror_themes.min.css",
                            variables.path+"bower_components/codemirror/lib/codemirror.js",
                            variables.path+"assets/js/custom/codemirror_fullscreen.min.js",
                            variables.path+"bower_components/codemirror/addon/edit/matchtags.js",
                            variables.path+"bower_components/codemirror/addon/edit/matchbrackets.js",
                            variables.path+"bower_components/codemirror/addon/fold/xml-fold.js",
                            variables.path+ "bower_components/codemirror/mode/htmlmixed/htmlmixed.js",
                            variables.path+"bower_components/codemirror/mode/xml/xml.js",
                            variables.path+"bower_components/codemirror/mode/php/php.js",
                            variables.path+"bower_components/codemirror/mode/clike/clike.js",
                            variables.path+"bower_components/codemirror/mode/javascript/javascript.js",
                            variables.path+"app/modules/angular-codemirror.js"
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                    {
                        name: 'lazy_datatables',
                        files: [
                            variables.path+'bower_components/datatables/media/js/jquery.dataTables.min.js',
                            variables.path+ 'bower_components/datatables-colvis/js/dataTables.colVis.js',
                            variables.path+ 'bower_components/datatables-tabletools/js/dataTables.tableTools.js',
                            variables.path+ 'bower_components/angular-datatables/dist/angular-datatables.js',
                            variables.path+'assets/js/custom/jquery.dataTables.columnFilter.js',
                            variables.path+'bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.min.js',
                            variables.path+'assets/js/custom/datatables_uikit.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_gantt_chart',
                        files: [
                            <!-- jquery ui -->
                            variables.path+ 'bower_components/jquery-ui/ui/minified/core.min.js',
                            variables.path+'bower_components/jquery-ui/ui/minified/widget.min.js',
                            variables.path+'bower_components/jquery-ui/ui/minified/mouse.min.js',
                            variables.path+'bower_components/jquery-ui/ui/minified/resizable.min.js',
                            variables.path+'bower_components/jquery-ui/ui/minified/draggable.min.js',
                            variables.path+'assets/js/custom/gantt_chart.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_tablesorter',
                        files: [
                            variables.path+'bower_components/tablesorter/dist/js/jquery.tablesorter.min.js',
                            variables.path+ 'bower_components/tablesorter/dist/js/jquery.tablesorter.widgets.min.js',
                            variables.path+'bower_components/tablesorter/dist/js/widgets/widget-alignChar.min.js',
                            variables.path+'bower_components/tablesorter/addons/pager/jquery.tablesorter.pager.js'
                        ]
                    },
                    {
                        name: 'lazy_vector_maps',
                        files: [
                            variables.path+'bower_components/raphael/raphael-min.js',
                            variables.path+'bower_components/jquery-mapael/js/jquery.mapael.js',
                            variables.path+'bower_components/jquery-mapael/js/maps/world_countries.js',
                            variables.path+'bower_components/jquery-mapael/js/maps/usa_states.js'
                        ],
                        serie: true
                    },

                    // ----------- KENDOUI COMPONENTS -----------
                    {
                        name: 'lazy_KendoUI',
                        files: [
                            variables.path+'bower_components/kendo-ui/js/kendo.core.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.color.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.data.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.calendar.min.js',
                            variables.path+ 'bower_components/kendo-ui/js/kendo.popup.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.datepicker.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.timepicker.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.datetimepicker.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.list.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.fx.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.userevents.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.menu.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.draganddrop.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.slider.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.mobile.scroller.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.autocomplete.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.combobox.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.dropdownlist.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.colorpicker.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.combobox.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.maskedtextbox.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.multiselect.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.numerictextbox.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.toolbar.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.panelbar.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.window.min.js',
                            variables.path+'bower_components/kendo-ui/js/kendo.angular.min.js',
                            variables.path+'bower_components/kendo-ui/styles/kendo.common-material.min.css',
                            variables.path+'bower_components/kendo-ui/styles/kendo.material.min.css'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },

                    // ----------- UIKIT HTMLEDITOR -----------
                    {
                        name: 'lazy_htmleditor',
                        files: [
                            variables.path+"bower_components/codemirror/lib/codemirror.js",
                            variables.path+ "bower_components/codemirror/mode/markdown/markdown.js",
                            variables.path+"bower_components/codemirror/addon/mode/overlay.js",
                            variables.path+"bower_components/codemirror/mode/javascript/javascript.js",
                            variables.path+"bower_components/codemirror/mode/php/php.js",
                            variables.path+"bower_components/codemirror/mode/gfm/gfm.js",
                            variables.path+ "bower_components/codemirror/mode/xml/xml.js",
                            variables.path+"bower_components/marked/lib/marked.js",
                            variables.path+"bower_components/uikit/js/components/htmleditor.js"
                        ],
                        serie: true
                    },

                    // ----------- STYLE SWITCHER -----------
                    {
                        name: 'lazy_style_switcher',
                        files: [
                            variables.path+"app/shared/style_switcher/style_switcher.js"
                        ]
                    }

                ]
            })
        }
    ]);