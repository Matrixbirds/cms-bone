<template>
    <div class="tab-container">
        <div class="layout-content max-height background-white">
            <router-view></router-view>
            <Page :total="100" show-total></Page>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tab-container',
};
</script>
<style>
.tab-container {
    flex: 1;
    display: flex;
    flex-direction: column;
};
</style>
