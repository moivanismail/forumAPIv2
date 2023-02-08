/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('comments', {
        id: {
        type: 'VARCHAR(50)',
        primaryKey: true,
        },
        content: {
        type: 'TEXT',
        notNull: true,
        },
        owner: {
        type: 'VARCHAR(50)',
        notNull: true,
        },
        thread_id: {
        type: 'VARCHAR(50)',
        notNull: true,
        },
        date: {
        type: 'TEXT',
        notNull: true,
        },
        is_deleted: {
        type: 'BOOLEAN',
        default: false,
        },
    },
    {
        ifNotExists: true,
    }
    );
    
    pgm.addConstraint('comments', 'fk_comments.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
    pgm.addConstraint('comments', 'fk_comments.thread_id_threads.id', 'FOREIGN KEY(thread_id) REFERENCES threads(id) ON DELETE CASCADE');
};

exports.down = pgm => {
    pgm.dropTable('comments', {
        ifExists: true,
        cascade: true,
    });
};
