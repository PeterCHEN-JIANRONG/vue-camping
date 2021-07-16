import emitter from '@/methods/eventBus';
import { saveLocalStorage, getLocalStorage } from '../methods/localStorage';

export default {
  methods: {
    addMyFavorite(item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        emitter.emit('push-message', {
          style: 'danger',
          title: '移除最愛成功',
        });
      } else {
        emitter.emit('push-message', {
          style: 'success',
          title: '加入最愛成功',
        });
        this.myFavorite.push(item.id);
      }
      saveLocalStorage(this.myFavorite);
    },
  },
  mounted() {
    this.myFavorite = getLocalStorage() || [];
  },
};
