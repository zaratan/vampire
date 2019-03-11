import React from 'react';

const DisciplinePower = ({ power }) => (
  <li>
    <header>{power.title}</header>
    <div>
      {power.description.map(line => (
        <p>{line}</p>
      ))}
    </div>
    <span>{power.source}</span>
    {power.extra_table && (
      <div>
        {power.extra_table.map(line => (
          <div>
            {line.map(cell => (
              <span>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    )}
    {power.extra_table_two && (
      <div>
        {power.extra_table.map(line => (
          <div>
            {line.map(cell => (
              <span>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    )}
  </li>
);

export default DisciplinePower;
