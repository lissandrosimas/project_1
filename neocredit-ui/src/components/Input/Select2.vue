<template>
    <select v-if="!multiple" style="width: 100%;">
        <slot></slot>
    </select>
    <select v-else multiple style="width: 100%;">
        <slot></slot>
    </select>
</template>

<script>
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        props: {
            options: {
                type: [Array, Object],
                default: () => {
                    return []
                }
            },
            isObject: {
                type: Boolean,
                default: false
            },
            value: [String, Number, Array, Object],
            placeholder: String,
            allowClear: {
                type: Boolean,
                default: false
            },
            ajax: {
                type: Boolean,
                default: false
            },
            urlAjax: String,
            minLength: {
                type: Number,
                default: 2
            },
            selectOption: {
                type: Boolean,
                default: false
            },
            selectOptionText: {
                type: String,
                default: "Selecione"
            },
            multiple: {
                type: Boolean,
                default: false
            },
            keyId: String,
            keyText: [String, Array],
            keyTextDivider: String
        },
        mounted: function () {
            var vm = this;

            var options = {
                data: vm.options,
                language: {
                    noResults: function () {
                        return "Nenhum resultado.";
                    },
                    searching: function () {
                        return "Pesquisando...";
                    },
                    errorLoading: function () {
                        return "Ocorreu um problema ao carregar os resultados.";
                    },
                    loadingMore: function () {
                        return "Carregando mais resultados...";
                    },
                    inputTooShort: function (args) {
                        var remainingChars = args.minimum - args.input.length;
                        var message = 'Digite ' + remainingChars + ' ou mais caracteres.';
                        return message;
                    },
                }
            };

            if (this.placeholder) {
                options.placeholder = vm.placeholder;
            }

            if (this.allowClear) {
                options.allowClear = vm.allowClear;
            }

            if (this.ajax) {
                options.ajax = {
                    url: window.axios.defaults.baseURL + vm.urlAjax,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Basic ' + facade.getAuthUser().token);
                    },
                    dataType: 'json',
                    data: function (params) {
                        return {
                            q: params.term
                        }
                    },
                    processResults: function (response) {
                        if (vm.keyId) {
                            return {
                                results: _.map(response, item => {
                                    return {
                                        id: item[vm.keyId],
                                        text: vm.__getText(item)
                                    }
                                })
                            }
                        } else {
                            return {
                                results: response
                            }
                        }
                    },
                    minimumInputLength: vm.minLength,
                    escapeMarkup: function (markup) {
                        return markup;
                    }
                }
            }

            // init select2
            $(this.$el).select2(options)
                .val(this.value)
                .trigger('change')
                // emit event on change.
                .on('change', function () {
                    if (vm.isObject) {
                        vm.$emit('change', $(this).select2('data')[0])
                        vm.$emit('input', $(this).select2('data')[0])
                    } else {
                        vm.$emit('change', this.value)
                        vm.$emit('input', this.value)
                    }
                });
        },
        watch: {
            value: function (value) {
                if (this.isObject) {
                    $(this.$el).val(value.id).trigger('change');
                    this.$emit('change', value);
                    this.$emit('input', value);
                } else {
                    $(this.$el).val(value).trigger('change');
                    this.$emit('change', value);
                    this.$emit('input', value);
                }
            },
            options: function (options) {
                if (options.length == 0) {
                    $(this.$el).select2('destroy').empty();

                    if (this.selectOption) {
                        $(this.$el).select2({data: [{id: '', text: this.selectOptionText}]});
                    } else {
                        $(this.$el).select2({data: options});
                    }
                } else {
                    // update options
                    $(this.$el).select2({data: options});
                    $(this.$el).val(this.value).trigger('change');
                }
            }
        },
        methods: {
            __getText(item) {
                if (this.keyText instanceof Array) {
                    return _.join(_.values(_.pick(item, this.keyText)), this.keyTextDivider)
                } else {
                    return item[this.keyText]
                }
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    };
</script>

<style lang="scss">

    .select2 {

    .select2-selection {
        display: block;
        width: 100%;
        height: 35.5px;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        line-height: 1.25;
        color: #607d8b;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    .select2-selection__arrow > b {
        margin-top: 1px;
    }

    .select2-selection__rendered {
        line-height: 1.25;
    }

    &
    :focus {
        border-color: #79a8d2;
        outline: none;
    }

    }

    }

    .select2-container {

    .select2-search__field {
        border: 1px solid rgba(0, 0, 0, 0.15);
        color: #607d8b;

    &
    :focus {
        border-color: #79a8d2;
        outline: none;
    }

    }

    .select2-dropdown {
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0px;

    .select2-results {

    .select2-results__message {
        color: #607d8b;
    }

    }
    }

    }
</style>
