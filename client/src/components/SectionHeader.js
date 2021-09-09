import React from 'react'

const SectionHeader = ({title, left}) => {
    return <h2 className={left ? "sectionHeader sectionHeader--left" : "sectionHeader sectionHeader--right"}>
        {title}
    </h2>
}

export default SectionHeader;
