angular
    .module('altairApp')
    .controller('main_sidebarCtrl', [
        '$timeout',
        '$scope',
        '$rootScope',
        function ($timeout,$scope,$rootScope) {

            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                $timeout(function() {
                    if(!$rootScope.miniSidebarActive) {
                        // activate current section
                        $('#sidebar_main').find('.current_section > a').trigger('click');
                    } else {
                        // add tooltips to mini sidebar
                        var tooltip_elem = $('#sidebar_main').find('.menu_tooltip');
                        tooltip_elem.each(function() {
                            var $this = $(this);

                            $this.attr('title',$this.find('.menu_title').text());
                            UIkit.tooltip($this, {});
                        });
                    }
                })
            });

            // language switcher
            $scope.langSwitcherModel = 'gb';
            var langData = $scope.langSwitcherOptions = [
                {id: 1, title: 'English', value: 'gb'},
                {id: 2, title: 'French', value: 'fr'},
                {id: 3, title: 'Chinese', value: 'cn'},
                {id: 4, title: 'Dutch', value: 'nl'},
                {id: 5, title: 'Italian', value: 'it'},
                {id: 6, title: 'Spanish', value: 'es'},
                {id: 7, title: 'German', value: 'de'},
                {id: 8, title: 'Polish', value: 'pl'}
            ];
            $scope.langSwitcherConfig = {
                maxItems: 1,
                render: {
                    option: function(langData, escape) {
                        return  '<div class="option">' +
                            '<i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i>' +
                            '<span>' + escape(langData.title) + '</span>' +
                            '</div>';
                    },
                    item: function(langData, escape) {
                        return '<div class="item"><i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i></div>';
                    }
                },
                valueField: 'value',
                labelField: 'title',
                searchField: 'title',
                create: false,
                onInitialize: function(selectize) {
                    $('#lang_switcher').next().children('.selectize-input').find('input').attr('readonly',true);
                }
            };

            // menu entries
            $scope.sections = [
                {
                    id: 0,
                    title: 'Dashboard',
                    icon: '&#xE871;',
                    link: 'restricted.dashboard'
                },
                {
                    id: 1,
                    title: 'Mailbox',
                    icon: '&#xE158;',
                    link: 'restricted.pages.mailbox'
                },
                {
                    id: 2,
                    title: 'Invoices',
                    icon: '&#xE53E;',
                    link: 'restricted.pages.invoices'
                },
                {
                    id: 3,
                    title: 'Chat',
                    icon: '&#xE0B9;',
                    link: 'restricted.pages.chat'
                },
                {
                    id: 4,
                    title: 'Scrum Board',
                    icon: '&#xE85C;',
                    link: 'restricted.pages.scrum_board'
                },
                {
                    id: 5,
                    title: 'Snippets',
                    icon: '&#xE86F;',
                    link: 'restricted.pages.snippets'
                },
                {
                    id: 6,
                    title: 'User Profile',
                    icon: '&#xE87C;',
                    link: 'restricted.pages.user_profile'
                },
                {
                    id: 7,
                    title: 'Forms',
                    icon: '&#xE8D2;',
                    submenu: [
                        {
                            title: 'Regular Elements',
                            link: 'restricted.forms.regular'
                        },
                        {
                            title: 'Advanced Elements',
                            link: 'restricted.forms.advanced'
                        },
                        {
                            title: 'File Upload',
                            link: 'restricted.forms.file_upload'
                        },
                        {
                            title: 'Validation',
                            link: 'restricted.forms.validation'
                        },
                        {
                            title: 'Wizard',
                            link: 'restricted.forms.wizard'
                        },
                        {
                            title: 'WYSIWYG Editor',
                            link: 'restricted.forms.wysiwyg'
                        }
                    ]
                },
                {
                    id: 8,
                    title: 'Kendo UI Widgets',
                    icon: '&#xE1BD;',
                    submenu: [
                        {
                            title: 'Autocomplete',
                            link: 'restricted.kendoui.autocomplete'
                        },
                        {
                            title: 'Calendar',
                            link: 'restricted.kendoui.calendar'
                        },
                        {
                            title: 'ColorPicker',
                            link: 'restricted.kendoui.colorpicker'
                        },
                        {
                            title: 'ComboBox',
                            link: 'restricted.kendoui.combobox'
                        },
                        {
                            title: 'DatePicker',
                            link: 'restricted.kendoui.datepicker'
                        },
                        {
                            title: 'DateTimePicker',
                            link: 'restricted.kendoui.datetimepicker'
                        },
                        {
                            title: 'DropDownList',
                            link: 'restricted.kendoui.dropdown_list'
                        },
                        {
                            title: 'Masked Input',
                            link: 'restricted.kendoui.masked_input'
                        },
                        {
                            title: 'Menu',
                            link: 'restricted.kendoui.menu'
                        },
                        {
                            title: 'MultiSelect',
                            link: 'restricted.kendoui.multiselect'
                        },
                        {
                            title: 'Numeric TextBox',
                            link: 'restricted.kendoui.numeric_textbox'
                        },
                        {
                            title: 'PanelBar',
                            link: 'restricted.kendoui.panelbar'
                        },
                        {
                            title: 'TimePicker',
                            link: 'restricted.kendoui.timepicker'
                        },
                        {
                            title: 'Toolbar',
                            link: 'restricted.kendoui.toolbar'
                        },
                        {
                            title: 'Window',
                            link: 'restricted.kendoui.window'
                        }
                    ]
                },
                {
                    id: 9,
                    title: 'Components',
                    icon: '&#xE87B;',
                    submenu: [
                        {
                            title: 'Accordions',
                            link: 'restricted.components.accordion'
                        },
                        {
                            title: 'Buttons',
                            link: 'restricted.components.buttons'
                        },
                        {
                            title: 'Cards',
                            link: 'restricted.components.cards'
                        },
                        {
                            title: 'Colors',
                            link: 'restricted.components.colors'
                        },
                        {
                            title: 'Common',
                            link: 'restricted.components.common'
                        },
                        {
                            title: 'Dropdowns',
                            link: 'restricted.components.dropdowns'
                        },
                        {
                            title: 'Dynamic Grid',
                            link: 'restricted.components.dynamic_grid'
                        },
                        {
                            title: 'Grid',
                            link: 'restricted.components.grid'
                        },
                        {
                            title: 'Icons',
                            link: 'restricted.components.icons'
                        },
                        {
                            title: 'Lightbox/Modal',
                            link: 'restricted.components.modal'
                        },
                        {
                            title: 'Lists',
                            link: 'restricted.components.lists'
                        },
                        {
                            title: 'Nestable',
                            link: 'restricted.components.nestable'
                        },
                        {
                            title: 'Notifications',
                            link: 'restricted.components.notifications'
                        },
                        {
                            title: 'Preloaders',
                            link: 'restricted.components.preloaders'
                        },
                        {
                            title: 'Sortable',
                            link: 'restricted.components.sortable'
                        },
                        {
                            title: 'Tables',
                            link: 'restricted.components.tables'
                        },
                        {
                            title: 'Tables Examples',
                            link: 'restricted.components.tables_examples'
                        },
                        {
                            title: 'Tabs',
                            link: 'restricted.components.tabs'
                        },
                        {
                            title: 'Tooltips',
                            link: 'restricted.components.tooltips'
                        },
                        {
                            title: 'Typography',
                            link: 'restricted.components.typography'
                        }
                    ]
                },
                {
                    id: 10,
                    title: 'E-commerce',
                    icon: '&#xE8CB;',
                    submenu: [
                        {
                            title: 'Product Details',
                            link: 'restricted.ecommerce.product_details'
                        },
                        {
                            title: 'Product Edit',
                            link: 'restricted.ecommerce.product_edit'
                        },
                        {
                            title: 'Products Grid',
                            link: 'restricted.ecommerce.products_grid'
                        },
                        {
                            title: 'Products List',
                            link: 'restricted.ecommerce.products_list'
                        }
                    ]
                },
                {
                    id: 11,
                    title: 'Plugins',
                    icon: '&#xE8C0;',
                    submenu: [
                        {
                            title: 'Calendar',
                            link: 'restricted.plugins.calendar'
                        },
                        {
                            title: 'Charts',
                            link: 'restricted.plugins.charts'
                        },
                        {
                            title: 'Code Editor',
                            link: 'restricted.plugins.code_editor'
                        },
                        {
                            title: 'Datatables',
                            link: 'restricted.plugins.datatables'
                        },
                        {
                            title: 'Gantt Chart',
                            link: 'restricted.plugins.gantt_chart'
                        },
                        {
                            title: 'Google Maps',
                            link: 'restricted.plugins.google_maps'
                        },
                        {
                            title: 'Tablesorter',
                            link: 'restricted.plugins.tablesorter'
                        },
                        {
                            title: 'Vector Maps',
                            link: 'restricted.plugins.vector_maps'
                        }
                    ]
                },
                {
                    id: 10,
                    title: 'Pages',
                    icon: '&#xE24D;',
                    submenu: [
                        {
                            title: 'Blank',
                            link: 'restricted.pages.blank'
                        },
                        {
                            title: 'Contact List',
                            link: 'restricted.pages.contact_list'
                        },
                        {
                            title: 'Error 404',
                            link: 'error.404'
                        },
                        {
                            title: 'Error 500',
                            link: 'error.500'
                        },
                        {
                            title: 'Help/Faq',
                            link: 'restricted.pages.help'
                        },
                        {
                            title: 'Login Page',
                            link: 'login'
                        },
                        {
                            title: 'Notes',
                            link: 'restricted.pages.notes'
                        },
                        {
                            title: 'Settings',
                            link: 'restricted.pages.settings'
                        },
                        {
                            title: 'Todo',
                            link: 'restricted.pages.todo'
                        },
                        {
                            title: 'User edit',
                            link: 'restricted.pages.user_edit'
                        }
                    ]
                }
            ]

        }
    ]);