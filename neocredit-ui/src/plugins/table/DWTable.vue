<template>

    <div>
        <table class="table table-stripped">
            <thead>
            <th v-for="head in headers">{{ head.label }}</th>
            <th>Ações</th>
            </thead>
            <tbody>
            <tr v-for="data in results">
                <td v-for="head in headers">{{ data[head.key] }}</td>
                <slot name="actions">
                    <td>
                        <a href="#">Teste</a>
                    </td>
                </slot>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        props: ['headers', 'results'],
        data() {
            return {}
        }
    }
</script>
