export default function animation() {
  /*----------------------------------------------------------------------------
    ANIMATION 1 (ANIMATES WHEN IN VIEWPORT)
  ----------------------------------------------------------------------------*/
  function money() {
    new Vivus('money', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  money();

  /*----------------------------------------------------------------------------
    ANIMATION 2
  ----------------------------------------------------------------------------*/
  function gears() {
    new Vivus('gears', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }

  gears();

  /*----------------------------------------------------------------------------
    ANIMATION 3
  ----------------------------------------------------------------------------*/
  function enviroment() {
    new Vivus('enviroment', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  enviroment();

  /*----------------------------------------------------------------------------
    ANIMATION 4
  ----------------------------------------------------------------------------*/
  function quality() {
    new Vivus('quality', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  quality();

  /*----------------------------------------------------------------------------
    ANIMATION 5
  ----------------------------------------------------------------------------*/
  function puzzle() {
    new Vivus('puzzle', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  puzzle();
  /*----------------------------------------------------------------------------
    ANIMATION 6
  ----------------------------------------------------------------------------*/
  function laboratory() {
    new Vivus('laboratory', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  laboratory();

  /*----------------------------------------------------------------------------
    ANIMATION 7
  ----------------------------------------------------------------------------*/
  function thumbup() {
    new Vivus('thumbup', {
      duration: 250,
      animTimingFunction: Vivus.EASEOUT,
      type: 'oneByOne'
    });
  }
  thumbup();
}
