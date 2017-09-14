<template>
    <div class="layout-content-main">
        <h5>Tab2</h5>
        <p>
            {{ items }}
        </p>
    </div>
</template>
<script>

import Store from '@/stores';

export default {
    name: 'tab2',
    data() {
        return {
            _items: Store.getItems()
        }
    },
    computed: {
        items() {
            return this._items;
        }
    }
};
</script>
<style>
</style>
