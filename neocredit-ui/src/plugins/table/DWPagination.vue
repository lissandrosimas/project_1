<template>

    <nav>
        <ul class="pagination">
            <li v-if="!pagination.first">
                <a href="#" aria-label="Previous" @click.prevent="changePage(0)">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
            <li v-for="page in pagination.totalPages" :class="{'active': page == (pagination.number + 1)}">
                <a href="#" @click.prevent="changePage(page-1)">{{ page }}</a>
            </li>
            <li v-if="!pagination.last">
                <a href="#" aria-label="Next" @click.prevent="changePage(pagination.totalPages - 1)">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        </ul>
    </nav>

</template>

<script>
    export default{
        props: {
            pagination: {
                type: Object,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            }
        },
        methods: {
            changePage: function (page) {
                this.pagination.number = page;
            }
        }
    }
</script>
