import {debounce} from "./utils"

export const itemListenerMixin = {
    data() {
        return {
                itemImgListener: null
            }
        },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
        console.log('我是混入的内容')
    }
}
