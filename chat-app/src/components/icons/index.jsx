import React from 'react'
import Icon from '@ant-design/icons'

function FBIcon() {
    
    const FBSvg = () => (
        <svg width="23px" height="23px" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <path opacity='0.5' fillRule="evenodd" clipRule="evenodd" d="M28.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M33,64C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z" fill='#010101'/>
        </svg>
    )

    return (
    <Icon component={FBSvg} />
    )
}

function TwitterIcon() {
    
    const TwitterSvg = () => (
        <svg width="23px" height="23px" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <path opacity='0.5' fillRule="evenodd" clipRule="evenodd" d="M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z" fill='#010101'/>
        </svg>
    )

    return (
    <Icon component={TwitterSvg} />
    )
}

function InstaIcon() {
    
    const InstaSvg = () => (
        <svg width="23px" height="23px" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <path opacity='0.5' fillRule="evenodd" clipRule="evenodd" d="M42.271,26.578v-0.006c0.502,0,1.005,0.01,1.508-0.002  c0.646-0.017,1.172-0.57,1.172-1.217c0-0.963,0-1.927,0-2.89c0-0.691-0.547-1.24-1.236-1.241c-0.961,0-1.922-0.001-2.883,0  c-0.688,0.001-1.236,0.552-1.236,1.243c-0.001,0.955-0.004,1.91,0.003,2.865c0.001,0.143,0.028,0.291,0.073,0.426  c0.173,0.508,0.639,0.82,1.209,0.823C41.344,26.579,41.808,26.578,42.271,26.578z M33,27.817c-3.384-0.002-6.135,2.721-6.182,6.089  c-0.049,3.46,2.72,6.201,6.04,6.272c3.454,0.074,6.248-2.686,6.321-6.043C39.254,30.675,36.462,27.815,33,27.817z M21.046,31.116  v0.082c0,4.515-0.001,9.03,0,13.545c0,0.649,0.562,1.208,1.212,1.208c7.16,0.001,14.319,0.001,21.479,0  c0.656,0,1.215-0.557,1.215-1.212c0.001-4.509,0-9.02,0-13.528v-0.094h-2.912c0.411,1.313,0.537,2.651,0.376,4.014  c-0.161,1.363-0.601,2.631-1.316,3.803s-1.644,2.145-2.779,2.918c-2.944,2.006-6.821,2.182-9.946,0.428  c-1.579-0.885-2.819-2.12-3.685-3.713c-1.289-2.373-1.495-4.865-0.739-7.451C22.983,31.116,22.021,31.116,21.046,31.116z   M45.205,49.255c0.159-0.026,0.318-0.049,0.475-0.083c1.246-0.265,2.264-1.304,2.508-2.557c0.025-0.137,0.045-0.273,0.067-0.409  V21.794c-0.021-0.133-0.04-0.268-0.065-0.401c-0.268-1.367-1.396-2.428-2.78-2.618c-0.058-0.007-0.113-0.02-0.17-0.03H20.761  c-0.147,0.027-0.296,0.047-0.441,0.08c-1.352,0.308-2.352,1.396-2.545,2.766c-0.008,0.057-0.02,0.114-0.029,0.171V46.24  c0.028,0.154,0.05,0.311,0.085,0.465c0.299,1.322,1.427,2.347,2.77,2.52c0.064,0.008,0.13,0.021,0.195,0.03H45.205z M33,64  C16.432,64,3,50.569,3,34S16.432,4,33,4s30,13.431,30,30S49.568,64,33,64z" fill='#010101'/>
        </svg>
    )

    return (
    <Icon component={InstaSvg} />
    )
}

function LinkedInIcon() {
    
    const LinkedInSvg = () => (
        <svg width="23px" height="23px" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg">
            <path opacity='0.5' fillRule="evenodd" clipRule="evenodd" d="M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z M25.354,48.137V27.71h-6.789v20.427  H25.354z" fill='#010101'/>
        </svg>
    )

    return (
    <Icon component={LinkedInSvg} />
    )
}

function ThreadsIcon() {
    
    const ThreadsSvg = () => (
        <svg width="18px" height="17px" viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg">
            <path opacity='0.5' fillRule='evenodd' clipRule='evenodd' d='M8.79925 14.4999C8.25144 14.4999 7.7174 14.4537 7.19819 14.3734L3.44558 16.5001V12.9596C1.489 11.6767 0.233276 9.70951 0.233276 7.49994C0.233276 3.63404 4.06844 0.499969 8.79925 0.499969C13.5301 0.499969 17.3652 3.63404 17.3652 7.49994C17.3652 11.3661 13.5301 14.4999 8.79925 14.4999ZM8.79925 1.50014C4.65976 1.50014 1.30403 4.18641 1.30403 7.49994C1.30403 9.53322 2.57056 11.3268 4.50303 12.4121L4.46927 14.7313L6.98956 13.3165C7.57007 13.432 8.17406 13.5 8.79925 13.5C12.9387 13.5 16.2946 10.8138 16.2946 7.49994C16.2946 4.18641 12.9387 1.50014 8.79925 1.50014ZM12.5469 7.00002H5.05165C4.75598 7.00002 4.51625 6.77605 4.51625 6.50005C4.51625 6.22379 4.75598 6 5.05165 6H12.5469C12.8425 6 13.0823 6.22379 13.0823 6.50005C13.0823 6.77605 12.8425 7.00002 12.5469 7.00002ZM6.12241 9.00002H11.4761C11.7718 9.00002 12.0116 9.22385 12.0116 9.49999C12.0116 9.77627 11.7718 10.0001 11.4761 10.0001H6.12241C5.82667 10.0001 5.58703 9.77627 5.58703 9.49999C5.58703 9.22385 5.82667 9.00002 6.12241 9.00002Z' fill='white'/>
        </svg>
    )

    return (
    <Icon component={ThreadsSvg} />
    )
}

export { FBIcon, TwitterIcon, InstaIcon, LinkedInIcon, ThreadsIcon }