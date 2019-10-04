<template>
    <div class="tile"
        @click="onTileClick"
        :style="{backgroundColor:getBackgroundColor}">
        <span class="tile__content">{{ getContent }}</span>
        </div>
</template>

<script>
export default {
    name:"tile",
    props: {
        content: {
            type: Number,
            required: true
        },
        isEmpty: {
            type: Boolean,
        },
        index: {
            type: Number
        }
    },
    computed: {
        getBackgroundColor() {
            return this.isEmpty ? 'white' : '#678EF0';
        },
        getContent() {
            return this.isEmpty ? '' : this.content;
        }
    },
    methods: {
        onTileClick() {
            this.$emit('onTileClick', this.index);
        }
    }

}
</script>

<style scoped>
.tile {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 10%;
    cursor: pointer;
}
.tile__content {
    display: block;
    font-size: 30px;
    font-weight: bold;
}
</style>
