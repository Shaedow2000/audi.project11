const second_header = document.getElementById( 'second-header' ) as HTMLHeadingElement;
const third_header  = document.getElementById(  'third-header' ) as HTMLHeadingElement;

const second_text = document.getElementById( 'second-text' ) as HTMLParagraphElement;

function is_visible( element: HTMLElement ): boolean {
  const values = element.getBoundingClientRect()
  return (
    values.top >= 0 &&
    values.bottom <= self.innerHeight
  ) 
}

self.addEventListener( 'scroll', (): void => {
  if ( is_visible( second_header ) ) {
    second_header.classList.add( 'animate-appear' )
    second_text.classList.add( 'animate-appear' )
  }

  if ( is_visible(  third_header ) ) {
    third_header.classList.add( 'animate-appear' )
  }
  
  for ( let i: number = 0; i <= 9; i++ ) {
    const element = document.getElementById( `p${ i + 1 }` ) as HTMLElement;

    if ( is_visible( element ) ) {
      element.style.scale = '105%';
    } else {
      element.style.scale = '100%';
    }
  }
} )
