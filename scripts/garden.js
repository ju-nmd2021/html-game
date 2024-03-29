class Garden {
  drawTiles(tilesX, tilesY, tileSize) {
    let offsetX = (1280 - tilesX * tileSize) / 2;
    let offsetY = (720 - tilesY * tileSize) / 2;
    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
        fill("#826048");
        strokeWeight(4);
        stroke("#6E4F36");

        rect(
          x * tileSize + offsetX,
          y * tileSize + offsetY,
          tileSize,
          tileSize
        );
      }
    }
  }
}
export { Garden };
