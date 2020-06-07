import React from 'react';
import teamData from './team';
import './team.styles.scss';

const Team = () => {
    const [...teams] = teamData;
    return (
        <div className='team-profile'>
            <h2 className='team-header text-center'>Leadership</h2>
            <div className='team-section row'>
            {
                teams.map((team) =>
                    
                        <div className='col-xl-3 col-sm-6 col-md-3 mb-5 team-card text-center'>
                            <div className='bg-white shadow-sm py-5 px-4 team-well'>
                                <img key={team.id} src={team.imageUrl} alt='' width='100' class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm' />
                                <h5 className='team-name'>Mrs Nenye Ubani</h5>
                                <span className='small text-uppercase team-role'>Proprietress</span>
                            </div>
                        </div>
                   
                )
                }
            </div>
        </div>
    )
}

export default Team;