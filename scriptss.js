const Layouts = {
    layout_1:[
        /*15*15 = 225*/
        /** '1'-wall;
         * 0-empty;
         * '2'-wolf;
         * '3'- rabbit
         * '4'- house;
         */
        0,1,0,0,0,0,0,0,0,0,0,0,0,0,4,
        0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,1,1,2,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,
        0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,
        0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,
        0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,
        0,0,1,1,0,0,2,1,0,0,0,0,0,0,0,
        0,0,0,2,1,0,0,0,0,0,0,0,1,2,0,
        0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,
    ],
    layout_2:[
        /**10*10 = 100 */
        0,1,0,0,0,0,0,0,0,4,
        0,1,0,0,0,0,0,0,0,0,
        0,1,1,2,0,0,0,0,0,0,
        0,0,0,0,0,1,0,0,0,0,
        0,0,0,0,0,1,2,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,2,0,0,
        0,0,0,0,0,0,0,0,1,0,
        0,2,1,0,0,3,0,0,0,0,
        0,0,1,0,0,0,0,1,1,0,
    ],
    layout_3:[
        /**5*5 = 25 */
        0,1,0,0,4,
        0,0,0,0,0,
        0,1,1,2,0,
        0,0,0,0,0,
        3,0,0,0,0,
    ]
}
  const currentLayout = Layouts.layout_1;
  // 0 - space
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty