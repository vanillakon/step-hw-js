class MarkerOnSteroids extends Marker {
  addSteroids(value) {
    if (!isNaN(value)) {
      this.quantity =
        +this.quantity + +value / 100 > 1 ? 1 : +this.quantity + +value / 100;
    }
    return this.quantity;
  }
}
