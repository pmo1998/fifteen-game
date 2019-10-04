<template>
    <info-block title="Time" :content="getTime"></info-block>
</template>

<script>
import Block from '../info-block/info-block'
export default {
    name: 'timer',
    components: {
      'info-block': Block  
    },
    data() {
        return {
            timerID: 0,
            seconds: 0
        }
    },
    props: {
        isVictory: {
            type: Boolean
        }
    },
    computed: {
        getTime() {
            return `${parseInt(this.seconds/60, 10) % 60 } : ${this.seconds % 60}`;
        }
    },
    mounted() {
        this.timerID = window.setInterval(() => {
            this.seconds++;
            if (this.isVictory) {
                window.clearInterval(this.timerID);
            }
        }, 1000);
    },
    
    destroyed() {
        window.clearInterval(this.timerID)
    }
    
}
</script>
