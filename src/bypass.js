function removeRegisterDiv() {
    const targetDiv = document.querySelector('.q-box[width="530"]');
    if (targetDiv) {
      targetDiv.remove();
    }
} 

function removeBlur() {
    const elements = document.querySelectorAll('*');
    
    elements.forEach(element => {
      const currentFilter = window.getComputedStyle(element).filter;
      
      if (currentFilter.includes('blur')) {
        element.style.filter = currentFilter.replace(/blur\(.*?\)/g, '').trim();
      }
    });
}
  
function removeColorBlock() {
    const blockingWall = document.querySelector('.q-flex.qu-alignItems--center.qu-justifyContent--center.qu-overflow--hidden.qu-zIndex--blocking_wall');
    
    if (blockingWall) {
      blockingWall.remove();
    }
}
  
function removeGay() {
    const fixedElement = document.querySelector('.q-fixed.qu-alignItems--center.qu-top--massive.qu-left--small.qu-right--small.qu-display--flex.qu-flexDirection--column');
    if (fixedElement) {
      fixedElement.remove();
    }
}
  
function forceScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    const fixedElements = document.querySelectorAll('*');
    fixedElements.forEach(element => {
      if (window.getComputedStyle(element).position === 'fixed') {
        element.style.position = '';
      }
    });
}

const RegisterDiv = document.querySelector('.q-box[width="530"]');

if (RegisterDiv) {
  removeRegisterDiv()
  removeBlur();
  removeColorBlock();
  removeGay();
  forceScroll();
  console.log("[Hennessy]: Bypassed Age Block.")
}
