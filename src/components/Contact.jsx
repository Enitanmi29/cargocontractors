import React from 'react'
import { contact } from '../constants'

const Contact = () => {
  return (
    
        <div className="row align-items-md-center g-5 p-5 bg-primary-subtle">
            <h1 className='text-center'>Contact Us: </h1>
    
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
            {contact.map((prop,index) => {    
              const styles = getStyles(prop.header); 
              return(
                <div className="col d-flex flex-column gap-2" key={index}>
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-secondary bg-gradient fs-3 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use xlink:href="https:whatsapp.com/dl/"></use>
                    </svg>
                  </div>
                    <h4 className="fw-semibold mb-0 text-body-emphasis" >{prop.header}</h4>
                    <div className=''>
                        <p className="text-body-secondary">{prop.paragraph}</p>
                        <a href={prop.link} className={styles.btn}>{styles.text}</a>
                    </div>         
                </div>

              );
                })}
            </div>
          </div>
        </div>
      )
    }

    const getStyles = (header) => {
      switch (header) {
        case 'Mobile': return { card: 'text-white', btn: 'btn btn-success btn-sm', text:'Whatsapp' };
        case 'GMail': return { card: 'text-white', btn: ' btn btn-danger btn-sm', text:'Mail' };
        case 'Instagram': return { card: 'text-dark', btn: ' btn btn-outline-danger btn-sm', text:'DM'  };
        case 'Twitter': return { card: 'text-dark', btn: 'btn btn-outline-primary btn-sm', text:'Tweet' };
        default: return { card: 'bg-light', btn: 'btn-primary btn-sm' };
      }
    }

export default Contact