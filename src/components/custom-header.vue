<template>
    <div class="custom-header">
        <Tooltip :content="userName" class="custom-userprofile">
            <Avatar class="custom-avatar">U</Avatar>
        </Tooltip>
    </div>
</template>
<script>
export default {
    name: 'custom-header',
    data() {
        return {
            userName: 'liyang02@qmtv.com',
        };
    }
};
</script>
<style>
.custom-header {
    flex: 1;
    max-height: 3rem;
    display: flex;
    flex-direction: row;
    align-item: center;
    background-color: #fff;
    justify-content: space-between;
    padding: 0 1rem;
    line-height: 3rem;
}
.custom-header .custom-userprofile {
    display: flex;
    align-item: center;
    justify-content: center;
    margin-left: auto;
}

.custom-header .custom-avatar {
    color: #f56a00;
    background-color: #fde3cf;
    vertical-align: middle;
}
</style>
