<template>
    <div class="max-height flex-container">
        <custom-header></custom-header>
        <tab-container></tab-container>
    </div>
</template>
<script>
import CustomHeader from '@/components/custom-header';
import TabContainer from '@/components/tab-container';
import Store from '@/stores';

export default {
    name: 'page',
    components: {
        CustomHeader,
        TabContainer,
    },
    data() {
        return {
            breadCrumbList: Store['breadCrumbList']
        };
    }
};
</script>
<style>
.flex-container {
    display: flex;
    flex-direction: column;
}
.custom-flex-container {
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
