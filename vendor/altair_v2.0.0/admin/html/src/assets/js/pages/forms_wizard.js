/*
*  Altair Admin
*  @version v2.0.0
*  @author tzd
*  @license http://themeforest.net/licenses
*  forms_wizard.js - forms_wizard.html
*/

$(function() {
    // wizard
    altair_wizard.advanced_wizard();
    altair_wizard.vertical_wizard();
});

// wizard
altair_wizard = {
    content_height: function(this_wizard,step) {
        var this_height = $(this_wizard).find('.step-'+ step).actual('outerHeight');
        $(this_wizard).children('.content').animate({ height: this_height }, 280, bez_easing_swiftOut);
    },
    advanced_wizard: function() {
        var $wizard_advanced = $('#wizard_advanced'),
            $wizard_advanced_form = $('#wizard_advanced_form');

        if ($wizard_advanced.length) {
            $wizard_advanced.steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                trigger: 'change',
                onInit: function(event, currentIndex) {
                    altair_wizard.content_height($wizard_advanced,currentIndex);
                    // initialize checkboxes
                    altair_md.checkbox_radio($(".wizard-icheck"));
                    // reinitialize uikit margin
                    altair_uikit.reinitialize_grid_margin();
                    setTimeout(function() {
                        $window.resize();
                    },100)
                },
                onStepChanged: function (event, currentIndex) {
                    altair_wizard.content_height($wizard_advanced,currentIndex);
                    setTimeout(function() {
                        $window.resize();
                    },100)
                },
                onStepChanging: function (event, currentIndex, newIndex) {
                    var step = $wizard_advanced.find('.body.current').attr('data-step'),
                        $current_step = $('.body[data-step=\"'+ step +'\"]');


                    // check input fields for errors
                    $current_step.find('[data-parsley-id]').each(function() {
                        $(this).parsley().validate();
                    });

                    // adjust content height
                    $window.resize();

                    return $current_step.find('.md-input-danger').length ? false : true;
                },
                onFinished: function() {
                    var form_serialized = JSON.stringify( $wizard_advanced_form.serializeObject(), null, 2 );
                    UIkit.modal.alert('<p>Wizard data:</p><pre>' + form_serialized + '</pre>');
                }
            })/*.steps("setStep", 2)*/;

            $window.on('debouncedresize',function() {
                var current_step = $wizard_advanced.find('.body.current').attr('data-step');
                altair_wizard.content_height($wizard_advanced,current_step);
            });

            // wizard
            $wizard_advanced_form
                .parsley()
                .on('form:validated',function() {
                    setTimeout(function() {
                        altair_md.update_input($wizard_advanced_form.find('.md-input'));
                        // adjust content height
                        $window.resize();
                    },100)
                })
                .on('field:validated',function(parsleyField) {

                    var $this = $(parsleyField.$element);
                    setTimeout(function() {
                        altair_md.update_input($this);
                        // adjust content height
                        var currentIndex = $wizard_advanced.find('.body.current').attr('data-step');
                        altair_wizard.content_height($wizard_advanced,currentIndex);
                    },100);


                    /*$(parsleyField.$element).each(function() {
                        console.log($this);
                    });*/
                });

        }
    },
    vertical_wizard: function() {
        var $wizard_vertical = $('#wizard_vertical');
        if ($wizard_vertical.length) {
            $wizard_vertical.steps({
                headerTag: "h3",
                bodyTag: "section",
                enableAllSteps: true,
                enableFinishButton: false,
                transitionEffect: "slideLeft",
                stepsOrientation: "vertical",
                onInit: function(event, currentIndex) {
                    altair_wizard.content_height($wizard_vertical,currentIndex);
                },
                onStepChanged: function (event, currentIndex) {
                    altair_wizard.content_height($wizard_vertical,currentIndex);
                }
            });
        }
    }

};