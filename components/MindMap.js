import React from 'react';
import ReactFlow, { Background, Controls, MiniMap, ReactFlowProvider } from 'react-flow-renderer';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Centralized Data Platform' },
        position: { x: 250, y: 25 },
        style: { backgroundColor: '#D6D5E6', color: '#333333' },
    },
    {
        id: '2',
        data: { label: 'Consolidates Data Sources' },
        position: { x: 100, y: 200 },
        style: { backgroundColor: '#8D93AB', color: '#FFFFFF' },
    },
    {
        id: '3',
        data: { label: 'Natural Language Query' },
        position: { x: 350, y: 200 },
        style: { backgroundColor: '#8D93AB', color: '#FFFFFF' },
    },
    {
        id: '4',
        data: { label: 'Advanced Analytics' },
        position: { x: 100, y: 350 },
        style: { backgroundColor: '#8D93AB', color: '#FFFFFF' },
    },
    {
        id: '5',
        data: { label: 'Visualizations and Reports' },
        position: { x: 350, y: 350 },
        style: { backgroundColor: '#8D93AB', color: '#FFFFFF' },
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-5', source: '1', target: '5' },
];

const nodeTypes = {
    input: () => <div style={{ padding: '10px', borderRadius: '5px' }}>Centralized Data Platform</div>,
};

const MindMap = () => {
    return (
        <div className="flex justify-center">
            <ReactFlowProvider>
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    nodeTypes={nodeTypes}
                    fitView
                    attributionPosition="top-right"
                >
                    <Background variant="dots" gap={12} size={0.5} />
                    <Controls showFitView showInteractive={false} />
                    <MiniMap nodeColor={(node) => {
                        switch (node.type) {
                            case 'input':
                                return '#D6D5E6';
                            default:
                                return '#8D93AB';
                        }
                    }} />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
};

export default MindMap;