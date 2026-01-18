const second_header = document.getElementById( 'second-header' ) as HTMLHeadingElement;

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
  }
} )
