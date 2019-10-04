<template>
    <div class="info-block">
        <div class="info-block__title">
            {{title}}
        </div>
        <div class="info-block__content">
            {{content}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'info-block',
    props: {
        title: {
            type: String
        },
        content: {
            type: String
        }
    }
}
</script>

<style scoped>
.info-block {
    background-color: lightgrey;
    padding: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    border-radius: 10%;
}
.info-block__title {
    font-size: 18px;
    margin-bottom: 5px;
}
.info-block__content {
    font-size: 21px;
}
</style>