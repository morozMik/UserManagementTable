import classNames from "classnames";

    
    //My Design System with Tailwind
  
export const MyDesignSystem = {
        inputtext: {
            root: ({ props, context }) => ({
                className: classNames(
                    'm-0',
                    'font-sans text-gray-600 dark:text-black/80 bg-black dark:text-black/80 dark:bg-gray-50 dark:bg-opacity-10 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                    {
                        'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                    },
                    {
                        'text-lg px-4 py-4': props.size == 'large',
                        'text-xs px-2 py-2': props.size == 'small',
                        'p-3 text-base': props.size == null
                    }
                )
            })
        },
        panel: {
            header: ({ props }) => ({
                className: classNames(
                    'flex items-center justify-between', // flex and alignments
                    'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-black/80', // Dark mode
                    { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
                )
            }),
            title: 'leading-none font-bold',
            toggler: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                    'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                    'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-black/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
                )
            },
            togglerIcon: 'inline-block',
            content: {
                className: classNames(
                    'p-5 border border-gray-300 bg-black text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-black/80' // Dark mode
                )
            },
            //transition: TRANSITIONS.toggleable
        },
        datatable: {
          root: ({ props }) => ({
              className: classNames('relative', {
                  'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
              })
          }),
          loadingoverlay: {
              className: classNames(
                  'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                  'transition duration-200',
                  'absolute flex items-center justify-center z-2',
                  'dark:bg-gray-100/40' // Dark Mode
              )
          },
          loadingicon: 'w-8 h-8',
          wrapper: ({ props }) => ({
              className: classNames({
                  relative: props.scrollable,
                  'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
              })
          }),
          header: ({ props }) => ({
              className: classNames(
                  'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                  'dark:border-blue-900/40 dark:text-black/80 dark:bg-gray-100', // Dark Mode
                  props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
              )
          }),
          table: 'w-full border-spacing-0',
          thead: ({ context }) => ({
              className: classNames({
                  'bg-slate-50 top-0 z-[1]': context.scrollable
              })
          }),
          tbody: ({ props, context }) => ({
              className: classNames({
                  'text-black font-semibold sticky z-[1]': props.frozenRow && context.scrollable
              })
          }),
          tfoot: ({ context }) => ({
              className: classNames({
                  'bg-slate-50 bottom-0 z-[1]': context.scrollable
              })
          }),
          footer: {
              className: classNames(
                  'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                  'dark:border-blue-900/40 dark:text-black/80 dark:bg-gray-100' // Dark Mode
              )
          },
          column: {
              headercell: ({ context, props }) => ({
                  className: classNames(
                      'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                      'transition duration-200',
                      context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                      context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                      context.sorted ? 
                      'dark:text-black/80 dark:bg-gray-50 dark:bg-opacity-30' : 
                      'dark:text-black/80 dark:bg-gray-50 dark:bg-opacity-10', // Dark Mode
                      {
                          'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                          'border-x border-y': context?.showGridlines,
                          'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                      }
                  )
              }),
              headercontent: 'flex items-center',
              bodycell: ({ props, context }) => ({
                  className: classNames(
                      'text-left border-0 border-b border-solid border-gray-300',
                      context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                      'dark:text-black/80 dark:border-blue-900/40', // Dark Mode
                      {
                          'sticky bg-inherit': props && (props.frozen || props.frozen === ''), // Frozen Columns
                          'border-x border-y': context.showGridlines
                      }
                  )
              }),
              footercell: ({ context }) => ({
                  className: classNames(
                      'text-left border-0 border-b border-solid border-gray-300 font-bold',
                      'bg-slate-50 text-slate-700',
                      'transition duration-200',
                      context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                      'dark:text-black/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                      {
                          'border-x border-y': context.showGridlines
                      }
                  )
              }),
              sorticon: ({ context }) => ({
                  className: classNames('ml-2', context.sorted ? 'text-blue-700 dark:text-black/80' : 'text-slate-700 dark:text-black')
              }),
              sortbadge: {
                  className: classNames(
                      'flex items-center justify-center align-middle',
                      'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                      'text-blue-700 bg-blue-50',
                      'dark:text-black/80 dark:bg-blue-400' // Dark Mode
                  )
              },
              columnfilter: 'inline-flex items-center ml-auto',
              filteroverlay: {
                  className: classNames(
                      'bg-black text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                      'dark:bg-blue-50 dark:border-black dark:text-black/80' //Dark Mode
                  )
              },
              filtermatchmodedropdown: {
                  root: 'min-[0px]:flex mb-2'
              },
              filterrowitems: 'm-0 p-0 py-3 list-none ',
              filterrowitem: ({ context }) => ({
                  className: classNames(
                      'm-0 py-3 px-5 bg-transparent',
                      'transition duration-200',
                      context?.highlighted ? 
                      'text-blue-700 bg-blue-100 dark:text-black/80 dark:bg-blue-200 dark:hover:bg-blue-200' :
                      'text-gray-600 bg-transparent dark:text-black/80 dark:bg-transparent'
                  )
              }),
              filteroperator: {
                  className: classNames(
                      'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                      'dark:border-blue-900/40 dark:text-black/80 dark:bg-gray-900' // Dark Mode
                  )
              },
              filteroperatordropdown: {
                  root: 'min-[0px]:flex'
              },
              filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
              filteraddrule: 'py-3 px-5',
              filteraddrulebutton: {
                  root: 'justify-center w-full min-[0px]:text-sm',
                  label: 'flex-auto grow-0',
                  icon: 'mr-2'
              },
              filterremovebutton: {
                  root: 'ml-2',
                  label: 'grow-0'
              },
              filterbuttonbar: 'flex items-center justify-between p-5',
              filterclearbutton: {
                  root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
              },
              filterapplybutton: {
                  root: 'w-auto min-[0px]:text-sm px-4 py-3'
              },
              filtermenubutton: ({ context }) => ({
                  className: classNames(
                      'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                      'w-8 h-8 rounded-[50%]',
                      'transition duration-200',
                      'hover:text-black/80 ', // Hover
                      'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                      'dark:text-black dark:hover:text-black/80 dark:hover:drop-shadow-sm', // Dark Mode
                      {
                          'bg-blue-50 text-blue-700': context.active
                      }
                  )
              }),
              headerfilterclearbutton: ({ context }) => ({
                  className: classNames('inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative', 'text-left bg-transparent m-0 p-0 border-none select-none ml-2', {
                      invisible: !context.hidden
                  })
              }),
              columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
              rowreordericon: 'cursor-move',
              roweditorinitbutton: {
                  className: classNames(
                      'inline-flex items-center justify-center overflow-hidden relative',
                      'text-left cursor-pointer select-none',
                      'w-8 h-8 border-0 rounded-[50%]',
                      'transition duration-200',
                      'text-slate-700 border-transparent',
                      'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                      'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                      'dark:text-black' // Dark Mode
                  )
              },
              roweditorsavebutton: {
                  className: classNames(
                      'inline-flex items-center justify-center overflow-hidden relative',
                      'text-left cursor-pointer select-none',
                      'w-8 h-8 border-0 rounded-[50%]',
                      'transition duration-200',
                      'text-slate-700 border-transparent',
                      'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                      'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                      'dark:text-black' // Dark Mode
                  )
              },
              roweditorcancelbutton: {
                  className: classNames(
                      'inline-flex items-center justify-center overflow-hidden relative',
                      'text-left cursor-pointer select-none',
                      'w-8 h-8 border-0 rounded-[50%]',
                      'transition duration-200',
                      'text-slate-700 border-transparent',
                      'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                      'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                      'dark:text-black' // Dark Mode
                  )
              },
              radioButton: {
                  className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
              },
              radioButtonInput: {
                  className: classNames(
                      'w-full h-full top-0 left-0 absolute appearance-none select-none',
                      'p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none',
                      'cursor-pointer peer'
                  )
              },
              radioButtonBox: ({ context }) => ({
                  className: classNames(
                      'flex items-center justify-center',
                      'h-6 w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out',
                      context.checked
                          ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400 peer-hover:bg-blue-700 peer-hover:border-blue-700'
                          : 'border-gray-300 bg-black dark:border-blue-900/40 dark:bg-gray-900 peer-hover:border-blue-500',
                      {
                          'hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 dark:hover:border-blue-400 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                          'cursor-default opacity-60': context.disabled,
                      },
                  ),
              }),
              radioButtonIcon: ({ context }) => ({
                  className: classNames(
                      'transform rounded-full',
                      'block h-3 w-3 bg-black transition duration-200 dark:bg-gray-900',
                      {
                          'backface-hidden scale-10 invisible': context.checked === false,
                          'visible scale-100 transform': context.checked === true,
                      },
                  ),
              }),
              headercheckboxwrapper: {
                  className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
              },
              headercheckbox: ({ context }) => ({
                  className: classNames(
                      'flex items-center justify-center',
                      'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                      context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-black dark:border-blue-900/40 dark:bg-gray-900',
                      {
                          'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                          'cursor-default opacity-60': context.disabled
                      }
                  )
              }),
              headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-black text-base dark:text-gray-900',
              checkboxwrapper: {
                  className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
              },
              checkbox: ({ context }) => ({
                  className: classNames(
                      'flex items-center justify-center',
                      'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                      context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-black dark:border-blue-900/40 dark:bg-gray-900',
                      {
                          'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                          'cursor-default opacity-60': context.disabled
                      }
                  )
              }),
              checkboxicon: 'w-4 h-4 transition-all duration-200 text-black text-base dark:text-gray-900',
              //transition: TRANSITIONS.overlay
          },
          bodyrow: ({ context }) => ({
              className: classNames(
                  context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-black text-gray-600 dark:bg-gray-900',
                  context.stripedRows ? (context.index % 2 === 0 ? 
                  'bg-black dark:text-black dark:bg-gray-100 dark:bg-opacity-10' : 
                  'bg-blue-50/50 text-gray-600 dark:bg-blue-100 dark:bg-opacity-10') : '',
                  'transition duration-200',
                  'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                  'dark:text-black/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                  {
                      'cursor-pointer': context.selectable,
                      'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                  }
              )
          }),
          rowexpansion: 'bg-black text-gray-600 dark:bg-gray-900 dark:text-black/80',
          rowgroupheader: {
              className: classNames('sticky z-[1]', 'bg-black text-gray-600', 'transition duration-200')
          },
          rowgroupfooter: {
              className: classNames('sticky z-[1]', 'bg-black text-gray-600', 'transition duration-200')
          },
          rowgrouptoggler: {
              className: classNames(
                  'text-left m-0 p-0 cursor-pointer select-none',
                  'inline-flex items-center justify-center overflow-hidden relative',
                  'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                  'transition duration-200',
                  'dark:text-black' // Dark Mode
              )
          },
          rowgrouptogglericon: 'inline-block w-4 h-4',
          resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
      }
    };