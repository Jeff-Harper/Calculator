// CSS
import "./style.css";
import "/styles/library.css";
import "/styles/margins.css";
import "/styles/modal.css";
import "/styles/reset.css";
import "/styles/utilities.css";

let Dialog = function (element) {
  this.element = element;
  // all Dialog properties here
  // ...

  this.binding = false; //we will use this to stroe a reference to the event listener
  initDialog(this);
};

function initDialog(dialog) {
  //dialog.trigger is the <button> element used to open the dialog
  Dialog.trigger.addEventListener("click", function (event) {
    // when opening the
  });
}
