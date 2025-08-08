# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineRequest(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: PipelineRequest):
    try:
        # Create a directed graph
        G = nx.DiGraph()
        
        # Add nodes
        for node in pipeline.nodes:
            G.add_node(node['id'])
        
        # Add edges
        for edge in pipeline.edges:
            G.add_edge(edge['source'], edge['target'])
        
        # Check if graph is a DAG
        is_dag = nx.is_directed_acyclic_graph(G)
        
        return {
            "num_nodes": len(pipeline.nodes),
            "num_edges": len(pipeline.edges),
            "is_dag": is_dag
        }
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Pipeline Analysis Service"}