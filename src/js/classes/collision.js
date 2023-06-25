export function wallCollision(object, windowWidth, windowHeight, objectWidth, objectHeight) {
    if (object.pos.x <= objectWidth / 2) {
        object.vel.x = -object.vel.x
    } //LEFT
    if (object.pos.x >= windowWidth - objectWidth / 2) {
        object.vel.x = -object.vel.x
    } //RIGHT
    if (object.pos.y <= objectHeight / 2) {
        object.vel.y = -object.vel.y
    } //TOP
    if (object.pos.y >= windowHeight - objectHeight / 2) {
        object.vel.y = -object.vel.y
    } //BOTTOM
}