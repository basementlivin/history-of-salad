export function initDrag() {
    let draggables = document.querySelectorAll('.js-draggable');

    if (draggables) {

        draggables.forEach(elem => {
            console.log(elem);
            Draggable.create(elem, {
                type: "x,y",
                edgeResistance: 0.8,
                bounds: ".newsletter",
                inertia: true,
                cursor: "grab",
                onDrag: function() {
                    this.target.classList.add('is-dragging');
                },
                onDragEnd: function() {
                    this.target.classList.remove('is-dragging');
                }
            });
        })

    }

}